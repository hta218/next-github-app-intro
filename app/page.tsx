async function getData() {
  let id = Math.floor(Math.random() * 100) + 1;
  let res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  let data = await res.json();
  return data;
}

export default async function Home() {
  let data = await getData();
  return (
    <main>
      <div>Title: {data.title}</div>
    </main>
  );
}
