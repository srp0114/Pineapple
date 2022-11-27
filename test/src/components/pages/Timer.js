import "../style/Login.css";
import { Badge } from "antd";

const Timer = () => {
  return (
    <div>
      <div class="badge_right">
        <Badge>
          <div class="timer">
            <div class="mask"></div>
          </div>
        </Badge>
      </div>
      <div className="bomb"></div>
    </div>
  );
};

// document.getElementById("timer").animate(
//     [
//       { transform: 'rotate(0) translate3D(-50%, -50%, 0)', color: '#000' },
//       { color: '#431236', offset: 0.3 },
//       { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)', color: '#000' }
//     ], {
//       duration: 3000,
//       iterations: Infinity
//     }
//   );

export default Timer;
