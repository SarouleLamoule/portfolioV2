import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Interface pour les membres
interface Member {
  id: string;
  codeName: string;
  tag: string;
  image: string;
  status: 'active' | 'inactive' | 'deceased';
  rank: string;
  specialization: string;
  joinDate: string;
  missions: number;
  description?: string;
  skills?: string[];
  notableMissions?: string[];
  psychologicalProfile?: {
    riskAssessment: string;
    stressTolerance: string;
    teamCompatibility: string;
    notes: string;
  };
  arsenal?: {
    weapons: string[];
    equipment: string[];
    specialties: string[];
  };
  recentActivities?: {
    date: string;
    activity: string;
    classification: 'public' | 'classified' | 'secret' | 'top-secret';
  }[];
  additionalInfo?: {
    clearanceLevel: string;
    lastEvaluation: string;
    nextMission: string;
  };
}

// Fonction pour charger les données depuis le fichier JSON
async function loadMembers(): Promise<Member[]> {
  try {
    const filePath = path.join(process.cwd(), 'data', 'members.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const members: Member[] = JSON.parse(fileContents);
    return members;
  } catch (error) {
    console.error('Error loading members:', error);
    throw new Error('Failed to load members data');
  }
}

// GET /api/members - Récupérer tous les membres
export async function GET(request: NextRequest) {
  try {
    // Récupérer les paramètres de requête
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const sortBy = searchParams.get('sortBy');
    const search = searchParams.get('search');

    // Charger tous les membres
    let members = await loadMembers();

    // Filtrage par statut
    if (status && status !== 'all') {
      members = members.filter((member) => member.status === status);
    }

    // Recherche par code name
    if (search) {
      members = members.filter((member) =>
        member.codeName.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Tri
    if (sortBy) {
      switch (sortBy) {
        case 'rank':
          const rankOrder = [
            'Commandant Suprême',
            'Capitaine',
            'Lieutenant',
            'Opérateur',
          ];
          members.sort(
            (a, b) => rankOrder.indexOf(a.rank) - rankOrder.indexOf(b.rank)
          );
          break;
        case 'name':
          members.sort((a, b) => a.codeName.localeCompare(b.codeName));
          break;
        case 'missions':
          members.sort((a, b) => b.missions - a.missions);
          break;
        default:
          break;
      }
    }

    // Retourner la réponse avec les métadonnées
    return NextResponse.json({
      success: true,
      data: members,
      meta: {
        total: members.length,
        filters: {
          status: status || 'all',
          sortBy: sortBy || 'rank',
          search: search || '',
        },
      },
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch members',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
