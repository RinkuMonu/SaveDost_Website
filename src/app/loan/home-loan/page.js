import LoanProductPage from "../../../../components/LoanProductPage";
import { loanProducts } from "../../../data/loanProducts";

export const metadata = {
  title: "Home Loan | SaveDost",
  description: "Explore home loans for property purchase, construction and renovation.",
};
export default function HomeLoanPage() {
  return <LoanProductPage product={loanProducts.home} />;
}
