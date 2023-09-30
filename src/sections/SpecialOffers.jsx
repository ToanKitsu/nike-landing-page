import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffers = () => {
  return (
    <div
      className="flex justify-between items-center
 max-xl:flex-col-reverse gap-10 max-container "
    >
      <div>
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
          alt=""
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Super</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button
            label="Learn more"
            backGroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </div>
  );
};
export default SpecialOffers;
