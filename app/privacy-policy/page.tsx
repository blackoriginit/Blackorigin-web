import LegalPage from "@/components/legal/LegalPage";

export const metadata = { title: "Privacy Policy | Black Origin" };

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="How Black Origin collects, uses and protects personal information. Last updated: 20 November 2026."
      sections={[
        {
          heading: "Who we are",
          paragraphs: [
            "Black Origin IT is a software engineering and AI automation company based in Bangladesh. This policy explains how we handle personal information when you visit www.blackoriginit.com, contact us, or use our project enquiry forms.",
            "For the purposes of this policy, Black Origin IT is the controller of the personal information described here. You can reach us at hr@blackoriginit.com.",
          ],
        },
        {
          heading: "Information you give us",
          paragraphs: [
            "When you use our contact or Start a Project form, we may receive the details you enter, such as your name, email address, company, country, phone number, preferred service, budget range, project timeline, project description, and how you heard about us. Your name, email address and message are required so that we can reply to you; the other fields are optional.",
            "If you contact us directly by email or through a link on this site, we receive the information you choose to include in your message and your email address.",
            "Please do not send passwords, payment details, identity documents, or other sensitive information through the website. If a project requires sensitive data, we will agree a secure channel and appropriate terms with you first.",
          ],
        },
        {
          heading: "How we use your information",
          paragraphs: [
            "We use the information you provide to respond to your enquiry, understand your project, prepare proposals, deliver services you have engaged us for, and keep a record of our communications.",
            "We may also use limited information to maintain and improve this website, understand which pages are useful, and protect the site from misuse. We do not use your enquiry details for automated decision-making or unsolicited marketing.",
          ],
        },
        {
          heading: "Why we are allowed to use it",
          paragraphs: [
            "Where data protection law applies, we rely on your consent when you choose to contact us, on our legitimate interest in running and growing our business when we respond to enquiries, and on legal obligations where we must keep certain records.",
            "You may withdraw consent at any time by emailing hr@blackoriginit.com. Withdrawing consent does not affect processing that already took place.",
          ],
        },
        {
          heading: "Sharing with third parties",
          paragraphs: [
            "We do not sell, rent, or trade your personal information. We may share it with trusted service providers who help us operate this website, host our infrastructure, or manage email communications, provided they are bound to use it only for those purposes.",
            "We may also disclose information if we are required to do so by law, or where necessary to protect the rights, safety, or property of Black Origin IT, our clients, or others.",
          ],
        },
        {
          heading: "Storage and protection",
          paragraphs: [
            "We keep personal information only as long as it is needed for the purpose it was collected, including ongoing business relationships and any legal or accounting requirements. When it is no longer needed, we delete or anonymise it.",
            "We use reasonable technical and organisational measures to protect information against loss, unauthorised access, and misuse. Access to enquiry details is limited to people who need it to respond to you or manage the relationship.",
          ],
        },
        {
          heading: "Your rights and choices",
          paragraphs: [
            "Depending on where you live, you may have the right to access the personal information we hold about you, ask us to correct it, request deletion, restrict or object to certain processing, or ask for a copy in a portable format.",
            "To make a request, email hr@blackoriginit.com. We will respond within the time required by applicable law and may need to verify your identity before acting on the request.",
          ],
        },
        {
          heading: "Children's privacy",
          paragraphs: [
            "This website is not directed to children, and we do not knowingly collect personal information from anyone under 16. If you believe a child has provided us with personal information, please contact us so that we can remove it.",
          ],
        },
        {
          heading: "Changes to this policy",
          paragraphs: [
            "We may update this policy as our website, services, or legal obligations change. The date at the top of this page shows when it was last updated, and we will post any revised policy here.",
          ],
        },
        {
          heading: "Contact us",
          paragraphs: [
            "If you have a question or concern about this Privacy Policy or how we handle your information, email hr@blackoriginit.com or write to Black Origin IT, Bangladesh.",
          ],
        },
      ]}
    />
  );
}
