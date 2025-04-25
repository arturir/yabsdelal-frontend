import { Oval } from 'react-loader-spinner';
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";

const StatusIndicator = ({ status }) => {
  switch (status) {
    case 'loading':
      return <Oval height={40} width={40} color="#57D900" />;
    case 'success':
      return <CheckCircle2 color="#57D900" height={40} width={40} />;
    case 'error':
      return <XCircle color="#B0B0B0" height={40} width={40} />;
    case 'retrying':
      return <RotateCcw strokeColor="#57D900" width={40} />;
    default:
      return null;
  }
};

export default StatusIndicator