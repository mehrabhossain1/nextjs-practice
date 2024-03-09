const AllShoesPage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    next: {
      revalidate: 5,
    },
  });
  const shoes = await res.json();
  console.log(shoes);

  return (
    <div>
      <h1 className="text-center text-3xl">All Shoes</h1>
      <div>
        {shoes.map((shoe) => (
          <p key={shoe.id}>{shoe.name}</p>
        ))}
      </div>
    </div>
  );
};

export default AllShoesPage;
