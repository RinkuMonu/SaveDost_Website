import LoanProductPage from "../../../../components/LoanProductPage";
import { loanProducts } from "../../../data/loanProducts";

export const metadata = {
  title: "Personal Loan | SaveDost",
  description: "Explore personal-loan guidance for planned and unexpected expenses.",
};
export default function PersonalLoanPage() {
  return <LoanProductPage product={loanProducts.personal} />;
}
