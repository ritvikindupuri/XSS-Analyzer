# Automated SAST Workflow using Generative AI

## Overview

This project involved designing and building an automated security workflow in Google's Opal to function as a sophisticated Static Application Security Testing (SAST) tool. This system addresses the time-consuming and manual nature of traditional code reviews by creating a multi-step, automated pipeline that leverages Generative AI.

The workflow ingests raw code and processes it through distinct stages, culminating in a comprehensive, client-ready HTML security report. This tool demonstrates a practical application of chained AI prompting to create a powerful, end-to-end system for identifying, reporting, and integrating security analysis.

## Core Technologies

* **Google's Opal:** The platform used to design and execute the multi-step AI workflow.
* **Generative AI:** The core engine, with different "AI agents" assigned to specialized tasks (planning, research, analysis).
* **GitHub Actions:** The CI/CD platform targeted for automated integration.
* **HTML/CSS:** Used to dynamically generate the final, professional security report.

---

## Part 1: The Core SAST Analysis Engine

This is the primary pipeline responsible for ingesting raw code and producing a comprehensive security analysis.

### How It Works: The 4-Step AI Pipeline

The entire process is orchestrated as a pipeline of chained AI agents. When a user submits code, it triggers this four-step sequence:

1.  **Plan:** An AI agent first analyzes the provided code to formulate a deep research query. This query is designed to find vulnerabilities, insecure patterns, and best-practice mitigations relevant to the code's logic.
2.  **Research:** A second agent uses this specialized query to perform in-depth research.
3.  **Analyze:** A high-skill "AI Security Analyst" agent receives both the *original code* and the *research findings*. It correlates this information to pinpoint specific, actionable vulnerabilities.
4.  **Report:** The final agent takes the structured vulnerability data and generates a comprehensive HTML security report.

<p align="center">
  <img src=".assets/Workflow%20Architecture.png" alt="Opal Workflow Architecture">
  <br>
  <em>Figure 1: The multi-step GenAI workflow in Google's Opal</em>
</p>

### The Result: The Automated Security Report

The final "Report" step generates a professional HTML document that clearly communicates the security posture of the analyzed code to both developers and leadership.

* **High-Level Summary:** The report opens with a dashboard providing an immediate overview of findings by severity, complete with a data visualization pie chart.
* **Deep Analysis:** For each vulnerability, the report provides a detailed breakdown of the flaw, its exploitation, and its business impact.
* **Actionable Mitigation:** Most importantly, the report provides a specific, code-level recommendation showing *exactly* how to fix the flaw.

<p align="center">
  <img src=".assets/Vulnerability%20Summary.png" alt="Vulnerability Summary Dashboard">
  <br>
  <em>Figure 2: The dynamically generated summary and distribution chart</em>
</p>

<p align="center">
  <img src=".assets/XSS%20Analysis.png" alt="XSS Analysis Section">
  <br>
  <em>Figure 3: In-depth analysis of an identified Reflected XSS vulnerability</em>
</p>

<p align="center">
  <img src=".assets/Actionable%20Insight.png" alt="Actionable Insight and Code Fix">
  <br>
  <em>Figure 4: A clear, actionable recommendation with a code-level fix</em>
</p>

---

## Part 2: The Automated CI/CD Integration Engine

A security tool is only effective if it's seamlessly integrated into the development lifecycle. To solve this, a second module was built: an AI-powered "CI/CD Integration Helper."

### How It Works: The AI Workflow Generator

This feature uses a dedicated AI agent whose sole task is to generate the configuration code needed to run the SAST scanner. The agent is prompted with the specific requirements of a CI/CD pipeline, such as running on a pull request and failing the build if "Critical" vulnerabilities are found.

<p align="center">
  <img src=".assets/GitHub%20actions%20agent.png" alt="AI Agent for generating GitHub Actions workflow">
  <br>
  <em>Figure 5: The AI agent prompt for generating the CI/CD workflow</em>
</p>

### The Result: A Production-Ready GitHub Actions File

The output is a complete, production-ready GitHub Actions YAML file. This allows any developer to copy, paste, and integrate the SAST scanner directly into their pull request process in minutes, not hours, ensuring security is checked automatically on every code change.

<p align="center">
  <img src=".assets/GitHub%20actions.png" alt="Example of the generated GitHub Actions YAML file">
  <br>
  <em>Figure 6: The resulting GitHub Actions YAML file for automated security analysis</em>
</p>

---

## Conclusion & Impact

This project demonstrates a practical application of chained AI prompting to create a powerful, end-to-end system for identifying, reporting, and integrating security analysis.

By automating the full cycle—from initial code analysis to generating a human-readable report *and* providing the CI/CD integration code—this tool solves a major bottleneck. It scales a high-skill security review and makes it accessible to any developer, embedding security directly into the development lifecycle.
