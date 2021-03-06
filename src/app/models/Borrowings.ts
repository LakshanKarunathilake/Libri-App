export interface Borrowing {
  issue_id: number;
  date_due: string;
  renewals: number;
  title: string;
  issuedate: string;
  status?: string;
  cardNumber: string;
}
