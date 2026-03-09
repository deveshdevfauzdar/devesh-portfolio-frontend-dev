import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2021',
    title: "St. Peter's School",
    subtitle: 'Secondary (X), CBSE',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2023',
    title: "St. Peter's School",
    subtitle: 'Senior Secondary (XII), Science',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2024',
    title: 'Ramjas College, DU',
    subtitle: 'B.Sc (Hons.) Mathematics',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2024',
    title: 'IIT Madras',
    subtitle: 'B.S. Data Science & Applications',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-2, 0, -13),
    year: '2026',
    title: 'TailorTalk',
    subtitle: 'AI Engineer Intern',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -16),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: '?',
    subtitle: '???',
    position: 'right',
  }
]