import Card from "@/components/modules/Card";

function HomePage({ customers }) {
  return (
    <div>
      {customers.map((customer) => {
        return <Card key={customer._id} customer={customer} />;
      })}
    </div>
  );
}

export default HomePage;
