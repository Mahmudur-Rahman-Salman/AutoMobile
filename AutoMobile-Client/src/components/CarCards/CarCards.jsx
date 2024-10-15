import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const CarCards = ({ item }) => {
  const { brand, model, year, price, mileage, image, id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  // const [, refetch] = useCarts();

  const handleAddtoCart = (car) => {
    if (user && user.email) {
      //send cart item to the database
      const cartItem = {
        carId: id,
        email: user.email,
        brand,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${brand} added to your cart`,
            showConfirmButton: false,
            timer: 1000,
          });
          // refetch cart to update the cart items count
          // refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          //   send the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }

    console.log(car, user.email);
  };
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl m-10">
        <figure>
          <img src={image} alt={brand} />
        </figure>
        <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title">
            {brand}
            <span>{model}</span>
            <span>{year}</span>
          </h2>
          <p className="text-left">Mileage:{mileage}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleAddtoCart(item)}
              className="btn btn-primary"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCards;
