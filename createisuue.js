const { Octokit } = require("@octokit/rest");

// 🔐 GitHub Token
const octokit = new Octokit({
  auth: "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"
});

// 📦 Repository Details
const owner = "StaytunedLAB";
const repo = "divya-parmar-kiran-bhai-2304030100991";

async function createIssue() {
  try {
    console.log("📋 Creating GitHub Issue...");

    const response = await octokit.rest.issues.create({
      owner: owner,
      repo: repo,
      title: "Issue created using Octokit",
      body: "This issue was created successfully using Octokit REST API 🚀"
    });

    console.log("✅ Issue Created Successfully");
    console.log("🔗 Issue URL:", response.data.html_url);

  } catch (error) {
    console.error("❌ Error:", error.status, error.message);
  }
}

createIssue();

