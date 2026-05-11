import { pricingData } from "./pricing-data";

type AuditInput = {
  tool: string;
  monthlySpend: number;
  teamSize: number;
};

type AuditOutput = {
  yearlySpend: number;
  estimatedSavings: number;
  recommendation: string;
};

export function runAudit({
  tool,
  monthlySpend,
  teamSize,
}: AuditInput): AuditOutput {

  const yearlySpend = monthlySpend * 12;

  let estimatedSavings = 0;

  let recommendation = "";

  // ChatGPT Logic
  if (
    tool === "ChatGPT"
    && teamSize <= 2
  ) {

    const currentCost =
      pricingData.ChatGPT.team * teamSize * 12;

    const optimizedCost =
      pricingData.ChatGPT.plus * teamSize * 12;

    estimatedSavings =
      currentCost - optimizedCost;

    recommendation =
      "Downgrade from ChatGPT Team to ChatGPT Plus for smaller teams.";

  }

  // Cursor Logic
  else if (
    tool === "Cursor"
    && teamSize <= 5
  ) {

    const currentCost =
      pricingData.Cursor.business * teamSize * 12;

    const optimizedCost =
      pricingData.Cursor.pro * teamSize * 12;

    estimatedSavings =
      currentCost - optimizedCost;

    recommendation =
      "Cursor Pro is likely more cost-efficient than Business for your current team size.";

  }

  // Claude Logic
  else if (
    tool === "Claude"
  ) {

    const currentCost =
      pricingData.Claude.team * teamSize * 12;

    const optimizedCost =
      pricingData.Claude.pro * teamSize * 12;

    estimatedSavings =
      currentCost - optimizedCost;

    recommendation =
      "Review Claude usage and remove unused seats to reduce monthly spend.";

  }

  // Gemini Logic
  else if (
    tool === "Gemini"
  ) {

    const currentCost =
      pricingData.Gemini.business * teamSize * 12;

    const optimizedCost =
      pricingData.Gemini.advanced * teamSize * 12;

    estimatedSavings =
      currentCost - optimizedCost;

    recommendation =
      "Gemini Advanced may provide sufficient functionality for your current team size.";

  }

  // GitHub Copilot Logic
  else if (
    tool === "GitHub Copilot"
  ) {

    const currentCost =
      pricingData["GitHub Copilot"].business * teamSize * 12;

    const optimizedCost =
      pricingData["GitHub Copilot"].individual * teamSize * 12;

    estimatedSavings =
      currentCost - optimizedCost;

    recommendation =
      "GitHub Copilot Individual may reduce unnecessary business licensing costs.";

  }

  // Default Logic
  else {

    estimatedSavings =
      Math.floor(yearlySpend * 0.15);

    recommendation =
      "Potential optimization opportunities identified based on your current spending.";

  }

  return {
    yearlySpend,
    estimatedSavings,
    recommendation,
  };
}