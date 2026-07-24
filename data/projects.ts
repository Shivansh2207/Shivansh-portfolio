export type ProjectStatus = "Prototype" | "Shipped";

export type Project = {
  slug: string;
  number: string;
  name: string;
  description: string;
  category: string;
  technologies: string[];
  status: ProjectStatus;
  accent: "blue" | "red" | "cyan";
  overview: string;
  problem: string;
  solution: string;
  role: string;
  features: string[];
  challenges: string;
  results: string;
  future: string;
};

export const projects: Project[] = [
  {
    slug: "assistvision",
    number: "01",
    name: "AssistVision",
    description:
      "A wearable accessibility system combining computer vision, OCR, IoT sensors, audio feedback, and emergency communication.",
    category: "AI + IoT",
    technologies: ["Python", "OpenCV", "OCR", "Raspberry Pi", "Firebase"],
    status: "Prototype",
    accent: "cyan",
    overview:
      "AssistVision explores how connected hardware and computer vision can make everyday environments easier to navigate.",
    problem:
      "Visual information in public spaces is often inaccessible, and many existing tools solve only one part of the problem.",
    solution:
      "A wearable system that combines scene understanding, text recognition, proximity sensing, audio cues, and emergency communication.",
    role:
      "Product concept, system architecture, computer vision prototyping, IoT integration, and application development.",
    features: [
      "Real-time object and scene feedback",
      "OCR-assisted text reading",
      "Obstacle and proximity awareness",
      "Emergency contact workflow",
    ],
    challenges:
      "Balancing useful real-time feedback with latency, battery constraints, and the risk of overwhelming the wearer.",
    results:
      "A working prototype foundation that validates the core hardware, vision, and communication flow.",
    future:
      "Improve edge inference, refine audio prioritization, and test the interaction model with accessibility-focused feedback.",
  },
  {
    slug: "reflex-workflow",
    number: "02",
    name: "Reflex Workflow",
    description:
      "A role-based workflow and operations platform designed to manage structured processes, records, approvals, and team activity.",
    category: "Full-Stack System",
    technologies: ["React", "Firebase", "PWA", "Role-Based Access"],
    status: "Shipped",
    accent: "blue",
    overview:
      "Reflex Workflow turns scattered operational tasks into a consistent, traceable system for teams.",
    problem:
      "Approvals, records, and responsibilities were distributed across informal channels, making ownership and progress difficult to follow.",
    solution:
      "A progressive web application with role-aware workspaces, structured records, approval states, and clear activity history.",
    role:
      "Full-stack development, data modeling, access-control design, workflow logic, and product implementation.",
    features: [
      "Role-based dashboards",
      "Structured approval workflows",
      "Searchable operational records",
      "Installable PWA experience",
    ],
    challenges:
      "Designing permissions and workflow states that remained understandable as processes became more complex.",
    results:
      "A shipped operations system that gives teams one place to manage structured work.",
    future:
      "Add deeper reporting, reusable workflow templates, and integration hooks for external tools.",
  },
  {
    slug: "mahavir-erp",
    number: "03",
    name: "Mahavir ERP",
    description:
      "An operational ERP for beverage distribution covering inventory, counter sales, delivery loads, driver cash settlement, and reconciliation.",
    category: "Business Software",
    technologies: ["React", "Node.js", "MongoDB", "Redis", "React Native"],
    status: "Shipped",
    accent: "red",
    overview:
      "Mahavir ERP connects the daily operational flow of a beverage distributor from stock movement to final reconciliation.",
    problem:
      "Inventory, delivery, counter sales, and cash settlement were handled across disconnected records that made reconciliation slow and error-prone.",
    solution:
      "A purpose-built ERP that models the complete operating day and gives each role the information and actions it needs.",
    role:
      "System design, full-stack engineering, operational modeling, mobile workflow design, and deployment support.",
    features: [
      "Inventory and counter sales",
      "Delivery load planning",
      "Driver cash settlement",
      "End-of-day reconciliation",
    ],
    challenges:
      "Translating real-world edge cases into a system that stayed fast and practical during busy daily operations.",
    results:
      "A shipped operational platform that unifies the distributor’s core business workflows.",
    future:
      "Expand analytics, automate more reconciliation checks, and refine offline mobile workflows.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
