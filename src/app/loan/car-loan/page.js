import LoanProductPage from "../../../../components/LoanProductPage";
import { loanProducts } from "../../../data/loanProducts";

export const metadata = {
  title: "Car Loan | SaveDost",
  description: "Explore new and used car finance with clear EMI and document guidance.",
};
export default function CarLoanPage() {
  return <LoanProductPage product={loanProducts.car} />;
}
