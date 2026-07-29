# Email Support Bot – Multi-Agent AI Automation

## Overview

Email Support Bot is an AI-powered multi-agent email automation system designed to streamline customer support operations. The workflow automatically monitors incoming emails, analyzes their content using Large Language Models (LLMs), identifies customer intent, detects urgency and sentiment, and determines whether the request should receive an automated response or be escalated for manual review.

The project is built using **n8n**, **OpenAI GPT**, **JavaScript**, and the **Gmail API**, demonstrating how Agentic AI workflows can automate real-world business processes while maintaining structured decision-making and human oversight.



## Problem Statement

Customer support teams often spend a significant amount of time handling repetitive email queries. Manually categorizing requests, identifying urgent issues, drafting responses, and escalating critical cases increases operational overhead and slows response times.

This project addresses these challenges by automating the complete email processing pipeline using multiple AI agents and workflow automation.



## Solution

The system continuously monitors an inbox using Gmail Trigger and forwards every incoming email to an AI-powered Email Analysis Agent.

The analysis agent extracts important information including:

- Customer Intent
- Urgency Level
- Sentiment
- Escalation Requirement
- Short Summary
- Draft Reply

The structured response is then parsed using JavaScript before being routed through a decision node.

Depending on the analysis:

- Routine emails receive an AI-generated response automatically.
- Critical or high-priority emails are forwarded to the escalation workflow for manual review.



## Features

- Automatic Gmail monitoring
- AI-based intent classification
- Sentiment analysis
- Urgency detection
- Context-aware email summarization
- AI-generated professional email replies
- Automatic escalation of critical requests
- Multi-agent architecture
- Human-in-the-loop decision process
- Structured JSON parsing
- End-to-end workflow automation



## Workflow Architecture

```text
Incoming Email
        │
        ▼
 Gmail Trigger
        │
        ▼
 Email Analysis Agent
        │
        ▼
 JavaScript JSON Parser
        │
        ▼
 Decision Node
 ┌────────────────────────────┐
 │                            │
 ▼                            ▼
Reply Agent             Escalation Agent
 │                            │
 ▼                            ▼
Customer Reply          Manager Notification
```



## Workflow Explanation

### Step 1 — Gmail Trigger

The workflow continuously monitors incoming customer emails using Gmail Trigger.


### Step 2 — Email Analysis Agent

The first AI agent processes the email and extracts structured information, including:

- Intent
- Urgency
- Sentiment
- Escalation decision
- Summary
- Suggested response



### Step 3 — JavaScript Parser

The AI response is cleaned and converted into structured JSON for downstream workflow processing.

Example Output

```json
{
  "intent": "Refund Request",
  "urgency": "High",
  "sentiment": "Negative",
  "should_escalate": true,
  "short_summary": "Customer requested an urgent refund.",
  "reply": "We have received your request and our support team is reviewing it."
}
```



### Step 4 — Decision Node

The workflow evaluates the value of `should_escalate`.

If the value is:

- **true** → Escalation Agent
- **false** → Reply Agent



### Step 5 — Reply Agent

Generates a professional customer response and sends it through Gmail.



### Step 6 — Escalation Agent

Generates an escalation email containing the issue summary and forwards it to the support manager or appropriate team.



## Repository Structure

```text
email-support-bot-multi-agent/
│
├── README.md
├── LICENSE
├── .gitignore
│
├── workflow/
│     email_support_workflow.json
│
├── code/
│     parser.js
│
├── screenshots/
│     workflow.png
│     reply.png
│     escalation.png
│
└── assets/
      architecture.png
```



## Technology Stack

| Category | Technologies |
|----------|--------------|
| Workflow Automation | n8n |
| Programming Language | JavaScript |
| AI Model | OpenAI GPT |
| Email Service | Gmail API |
| AI Concepts | Multi-Agent Systems, Agentic AI |
| Data Format | JSON |



## Installation

1. Clone the repository.

```bash
git clone https://github.com/Rahul29999/email-support-bot-multi-agent.git
```

2. Import the workflow JSON into n8n.

3. Configure Gmail credentials.

4. Configure the OpenAI API credentials.

5. Execute the workflow.



## Screenshots

The repository contains screenshots demonstrating:

- Complete workflow
- Email classification
- Automatic reply generation
- Escalation process



## Future Improvements

- Support for multiple LLM providers
- CRM integration
- Slack notifications
- Ticket generation
- Knowledge Base integration
- Conversation memory
- Analytics dashboard
- Multi-language support
- Priority scoring
- Response quality evaluation



## Skills Demonstrated

- Agentic AI
- Multi-Agent Systems
- Workflow Automation
- Prompt Engineering
- OpenAI API Integration
- Gmail API
- JSON Processing
- JavaScript
- Decision Routing
- Business Process Automation




## Author

**Rahul Kumar Sharma**

B.Tech, Indian Institute of Technology (ISM) Dhanbad

Interested in AI Engineering, Generative AI, Agentic AI Systems, Workflow Automation, and Large Language Model Applications.



## License

This project is released under the MIT License.
