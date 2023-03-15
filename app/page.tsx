import { App } from "octokit";

async function getData() {
  let app = new App({
    appId: process.env.GITHUB_APP_ID!,
    privateKey: process.env.GITHUB_APP_SECRET!,
  });
  let data = await app.octokit.request("/app");
  return data.data;
}

export default async function Home() {
  let data = await getData();
  return (
    <main>
      <div>App name: {data.name}</div>
    </main>
  );
}
