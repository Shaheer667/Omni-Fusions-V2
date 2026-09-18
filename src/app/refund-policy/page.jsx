export const metadata = {
  title: 'Cancellation & Refund Policy',
  description: 'General cancellation and refund information for Omni Fusions service engagements.',
  alternates: { canonical: '/refund-policy' }
};

export default function RefundPolicyPage() {
  return (
    <section className="pageHero sectionLight legalPage">
      <div className="shell legalWrap">
        <p className="eyebrow">CANCELLATION & REFUND POLICY</p>
        <h1>How cancellations and refund requests are handled.</h1>

        <div className="legalCopy">
          <p className="legalUpdated">Last updated: September 18, 2026</p>

          <p>
            Omni Fusions provides custom creative and technology services rather than standard retail products. Because each engagement can involve reserved team capacity, completed work, project-specific preparation and third-party costs, cancellation and refund terms are confirmed in the applicable proposal, invoice or project agreement.
          </p>

          <h2>Before work begins</h2>
          <p>
            If you need to cancel before work has started, contact us as soon as possible. Any refund will be assessed against the terms of the applicable agreement, payment-provider charges and any non-recoverable costs already incurred for the project.
          </p>

          <h2>After work has started</h2>
          <p>
            Once work has begun, amounts corresponding to work already performed, time or production capacity already reserved, approved milestones and non-recoverable third-party costs may not be refundable, subject to the applicable project agreement and mandatory law.
          </p>

          <h2>Milestone and project payments</h2>
          <p>
            Where a project is billed in milestones, each milestone is handled according to the written scope and payment schedule. Questions about incomplete or disputed milestones should be raised promptly so the work and payment record can be reviewed.
          </p>

          <h2>Ongoing monthly support</h2>
          <p>
            Recurring engagements may include notice periods, reserved monthly capacity or other cancellation terms stated in the relevant agreement. Completed service periods and non-recoverable costs are not automatically refundable.
          </p>

          <h2>Duplicate or incorrect charges</h2>
          <p>
            If you believe you were charged twice or an invoice was paid in error, contact us with the relevant invoice or payment details so we can review the transaction.
          </p>

          <h2>How to request a review</h2>
          <p>
            Email <a href="mailto:info@omnifusions.com">info@omnifusions.com</a> with the project name, invoice or transaction reference and the reason for your request. We will review the request against the applicable project terms and work completed to date.
          </p>

          <p className="legalNote">
            Project-specific contracts, proposals and invoices take priority over this general website policy. This page should be reviewed with legal counsel before relying on it for jurisdiction-specific consumer or commercial requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
