# Automated SAST Workflow using Generative AI

## Overview

This project involved designing and building an automated security workflow in Google's Opal to function as a sophisticated Static Application Security Testing (SAST) tool. This system addresses the time-consuming and manual nature of traditional code reviews by creating a multi-step, automated pipeline that leverages Generative AI.

The workflow ingests raw code and processes it through distinct stages, culminating in a comprehensive, client-ready HTML security report. This tool demonstrates a practical application of chained AI prompting to create a powerful, automated system for identifying, analyzing, and reporting on application security flaws.

##  Core Technologies

* **Google's Opal:** The platform used to design and execute the multi-step AI workflow.
* **Generative AI:** The core engine, with different "AI agents" assigned to specialized tasks (planning, research, analysis).
* **HTML/CSS:** Used to dynamically generate the final, professional security report.

---

##  Workflow Architecture

The entire process is orchestrated as a pipeline of chained AI agents. When a user submits code, it triggers a four-step sequence:

1.  **Plan:** An AI agent first analyzes the provided code to formulate a deep research query. This query is designed to find vulnerabilities, insecure patterns, and best-practice mitigations relevant to the code's logic.
2.  **Research:** A second agent uses this specialized query to perform in-depth research.
3.  **Analyze:** A high-skill "AI Security Analyst" agent receives both the *original code* and the *research findings*. It correlates this information to pinpoint specific, actionable vulnerabilities.
4.  **Report:** The final agent takes the structured vulnerability data and generates a comprehensive HTML security report.

<p align="center">
  <img src=".assets/Workflow%20Architecture.png" alt="Opal Workflow Architecture">
  <br>
  <em>Figure 1: The multi-step GenAI workflow in Google's Opal</em>
</p>

---

##  Project Output: The Automated Security Report

The final product is a professional HTML report that clearly communicates the security posture of the analyzed code. The report is designed to be understood by both developers and leadership.

### 1. High-Level Vulnerability Summary

The report opens with a "Vulnerability Summary" dashboard. This provides an immediate, high-level overview of the findings, including a count of critical, medium, and low-severity vulnerabilities. A pie chart offers instant data visualization for quick assessment.

<p align="center">
  <img src=".assets/Vulnerability%20Summary.png" alt="Vulnerability Summary Dashboard">
  <br>
  <em>Figure 2: The dynamically generated summary and distribution chart</em>
</p>

### 2. Deep Analysis & Impact

For each identified vulnerability, the report provides a detailed breakdown. As shown in the analysis of a Reflected XSS flaw, this includes:

* **Vulnerability Description:** A clear explanation of *what* the flaw is.
* **Exploitation:** A concrete example of *how* an attacker could exploit it.
* **Impact:** The business and security impact, such as session hijacking or cookie theft.

<p align="center">
  <img src=".assets/XSS%20Analysis.png" alt="XSS Analysis Section">
  <br>
  <em>Figure 3: In-depth analysis of an identified Reflected XSS vulnerability</em>
</p>

### 3. Actionable Code-Level Mitigation

The most critical part of the report is the "Recommendations" section. Instead of just stating a problem, the AI provides a specific, actionable solution. This includes a clear **Recommendation 1: Implement Context-Aware Output Encoding** and a concrete code example showing *exactly* how to fix the flaw using a vetted library like `escape-html`.

<p align="center">
  <img src=".assets/Actionable%20Insight.png" alt="Actionable Insight and Code Fix">
  <br>
  <em>Figure 4: A clear, actionable recommendation with a code-level fix</em>
</p>

---

## Conclusion & Impact

This project successfully demonstrates the power of GenAI to automate and scale complex security tasks. By chaining multiple specialized AI agents, this workflow transforms a manual, time-intensive code review into a fast, repeatable, and automated process.

The system not only identifies flaws but, more importantly, **produces a high-quality, actionable report** that bridges the gap between security analysis and developer remediation. This tool serves as a powerful proof-of-concept for an intelligent, next-generation SAST solution.
