import { useEffect } from "react";

const Alert = (props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.alertRemoved();
    }, 2000);

    return () => clearTimeout(timer);
  }, [props.list]);

  return (
    <div className={`alert-${props.messageType}`}>
      <p>{props.alertMessage}</p>
    </div>
  );
};

export default Alert;