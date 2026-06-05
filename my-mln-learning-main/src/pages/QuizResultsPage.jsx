import { useLocation, useNavigate } from "react-router-dom";

const styles = `
  .results-wrapper {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  .result-card {
  background: white;
  padding: 3rem;
  padding-right: 5rem;
  padding-left: 5rem;
  max-width: 600px;
  border: 5px solid;
  border-image: linear-gradient(to right, #3626B2, #00B4D8) 1;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.5s ease-out;
}

.score-display {
  font-size: 5rem;
  font-weight: 800;
  background: linear-gradient(to right, #3626B2, #00B4D8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 1rem 0;
}

  @keyframes slideUp {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .result-title {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(to right, #3626B2, #00B4D8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 2rem;
  }

  .percentage-badge {
    display: inline-block;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 2rem;
    border-radius: 50px;
    background: linear-gradient(to right, #3626B2, #00B4D8);
    color: white;
    margin: 1rem 0;
  }

  .result-message {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 2rem 0;
  }

  .result-message.pass {
    color: #28a745;
  }

  .result-message.fail {
    color: #ffc107;
  }

  .action-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
    flex-wrap: wrap;
  }

  .result-btn {
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
  }

  .result-btn.primary {
    background: linear-gradient(to right, #00B4D8, #3626B2);
    color: white;
  }

  .result-btn.primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(44, 74, 227, 0.4);
  }

  .result-btn.secondary {
    background: #000;
    color: white;
  }

  .result-btn.secondary:hover {
    background: #333;
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    .result-card {
      padding: 2rem;
    }

    .result-title {
      font-size: 2rem;
    }

    .score-display {
      font-size: 3.5rem;
    }

    .percentage-badge {
      font-size: 1.5rem;
    }

    .result-message {
      font-size: 1.2rem;
    }

    .action-buttons {
      flex-direction: column;
    }

    .result-btn {
      width: 100%;
    }
  }
`;

const QuizResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total, percentage } = location.state || {
    score: 0,
    total: 0,
    percentage: 0,
  };

  const isPassed = percentage >= 70;

  return (
    <>
      <style>{styles}</style>
      <div className="results-wrapper">
        <div className="result-card">
          <h1 className="result-title">
            <i className="bi bi-trophy-fill me-2"></i>
            Hoàn thành trắc nghiệm HCM202!
          </h1>

          <div className="score-display">
            {((score / total) * 10).toFixed(1)} điểm
          </div>

          <div className="percentage-badge">{percentage.toFixed(1)}%</div>

          <p className={`result-message ${isPassed ? "pass" : "fail"}`}>
            {isPassed ? (
              <>Xuất sắc! Bạn đã vượt qua!</>
            ) : (
              <>Cố gắng lên! Thử lại nhé!</>
            )}
          </p>

          <div className="action-buttons">
            <button
              className="result-btn primary"
              onClick={() => navigate("/quiz")}
            >
              <i className="bi bi-arrow-clockwise me-2"></i>
              Ôn lại
            </button>
            <button
              className="result-btn secondary"
              onClick={() => navigate("/")}
            >
              <i className="bi bi-house-door me-2"></i>
              Trang chủ
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizResultsPage;
