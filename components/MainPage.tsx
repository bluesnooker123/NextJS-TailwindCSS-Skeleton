import { useEffect, useState} from "react";

interface MainPageProps {
  setMessage: Function;
}

const MainPage: React.FC<MainPageProps> = (props) => {
  const [SpinValue, setSpinValue] = useState(1);

  function SpinValueFromInput(amount: number) {     // The minimum value of input box is 1
    setSpinValue(amount > 0 ? amount : 1);
  }

  return (
    <div className="bg-blue-500 text-green-900">
      <div className="flex flex-col py-5 items-center justify-between">
        <span className="my-2 font-custom">This is custom font style and please type text to change message</span>
        <input className="my-2 font-Righteous" type="number" value={SpinValue}
                      onChange={(e) => SpinValueFromInput(Number(e.target.value))} required/>
        <button className="my-2 sample-btn p-3" onClick={() => props.setMessage(SpinValue)}>Press here to change text</button>
      </div>
    </div>
  );
};

export default MainPage;


