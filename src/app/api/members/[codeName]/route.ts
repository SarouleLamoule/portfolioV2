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

// GET /api/members/[codeName] - Récupérer un membre spécifique
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ codeName: string }> }
) {
  try {
    const { codeName } = await params;
    console.log('API Route called with codeName:', codeName);

    // Validation du code name
    if (!codeName || typeof codeName !== 'string') {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid code name',
          message: 'Code name is required and must be a string',
        },
        { status: 400 }
      );
    }

    // Charger tous les membres
    const members = await loadMembers();

    // Rechercher le membre par code name (insensible à la casse)
    const member = members.find(
      (m) => m.codeName.toLowerCase() === codeName.toLowerCase()
    );

    // Si le membre n'est pas trouvé
    if (!member) {
      return NextResponse.json(
        {
          success: false,
          error: 'Member not found',
          message: `No member found with code name: ${codeName}`,
        },
        { status: 404 }
      );
    }

    // Retourner le membre avec les métadonnées
    return NextResponse.json({
      success: true,
      data: member,
      meta: {
        codeName: member.codeName,
        status: member.status,
        rank: member.rank,
        lastUpdated: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch member',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
