import LegalPage from "@/components/legal/LegalPage";

export const metadata = { title: "Privacy Policy | Black Origin" };

const PENDING = "Content pending team approval.";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="How Black Origin collects, uses and protects personal information."
      sections={[
        { heading: "Information we collect", paragraphs: [PENDING] },
        { heading: "How we use your information", paragraphs: [PENDING] },
        { heading: "How information is stored and protected", paragraphs: [PENDING] },
        { heading: "Sharing with third parties", paragraphs: [PENDING] },
        { heading: "Privacy requests and questions", paragraphs: [PENDING] },
        { heading: "Contact us", paragraphs: [PENDING] },
      ]}
    />
  );
}
