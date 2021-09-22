import { Button } from '@mui/material';

interface IhowToSub {
   handleNext: () => void;
}

const HowToSubscribe: React.FC<IhowToSub> = ({ handleNext }) => {
   return (
      <div>
         <Button onClick={handleNext}>Complete</Button>
      </div>
   );
};

export default HowToSubscribe;
