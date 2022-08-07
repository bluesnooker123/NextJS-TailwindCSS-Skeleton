import { useState} from "react"
import { useInfo } from "../../core/context-provider/info-context"

interface HomePageProps {
}

const HomePage: React.FC<HomePageProps> = (props) => {
  const [SpinValue, setSpinValue] = useState(1);
  const { setMessage } = useInfo();

  function SpinValueFromInput(amount: number) {     // The minimum value of input box is 1
    setSpinValue(amount > 0 ? amount : 1);
  }

  return (
    <div className="bg-blue-500 text-green-900">
      <div className="flex flex-col py-5 items-center justify-between">
        <span className="my-2 font-custom">This is custom font style and please type text to change message</span>
        <input className="my-2 font-Righteous" type="number" value={SpinValue}
                      onChange={(e) => SpinValueFromInput(Number(e.target.value))} required/>
        <button className="my-2 sample-btn p-3" onClick={() => setMessage?.(SpinValue)}>Press here to change text</button>
      </div>
    </div>
  );
};

export default HomePage;


