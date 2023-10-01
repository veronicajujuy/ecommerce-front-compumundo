/* eslint-disable react/prop-types */
import Table from "react-bootstrap/Table";
const TableDetails = ({ product }) => {
  delete product.id;
  delete product.name;
  delete product.img;
  delete product.stock;
  delete product.price;
  delete product.description;
  const entries = Object.entries(product);

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Característica</th>
          <th>Detalle</th>
        </tr>
      </thead>
      <tbody>
        {entries.map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>
              {typeof value === "object" ? (
                <ul>
                  {Object.entries(value).map(([subKey, subValue]) => (
                    <li key={subKey}>{`${subKey}: ${subValue}`}</li>
                  ))}
                </ul>
              ) : (
                value
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableDetails;
