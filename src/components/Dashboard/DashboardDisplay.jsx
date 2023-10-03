import styles from "../Dashboard/dashboard.module.scss";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <div className={styles.item1}>
          <div className={styles.item11}>
            <img
              src="/Assets/man.png"
              className={styles.imgman}
              alt="profile-image"
            />
          </div>
          <div className={styles.item12}>
            <h1>My Profile</h1>
            <h2>Manusha Dananjaya </h2>
            <h3>
              manushadananjaya999@Gmail.com <span></span>
            </h3>
            <h3>
              FUCKYOU69 <span></span>
            </h3>
          </div>
        </div>
      </div>

      <div className={styles.section2}>
        <div className={styles.item2}>
          <h1>Account Details</h1>
          <h2>
            Current Balance : <span>1150</span>
          </h2>
          <h2>
            Available Balance : <span>510</span>
          </h2>
          <h2>
            Have to pay : <span>6969</span>
          </h2>
          <button className={styles.button71} role="button">
            More Details
          </button>
        </div>
        <div className={styles.item3}>
          <h1>Recent Transitions</h1>
          <h2>
            <span></span>
          </h2>
          <h2>
            <span>Deposite :</span>
            <span>1120</span>
          </h2>
          <h2>
            <span>Withdraw :</span>
            <span>1120</span>
          </h2>
          <h2>
            <span>Withdraw :</span>
            <span>1120</span>
          </h2>
          <h2>
            <span>Deposite :</span>
            <span>1120</span>
          </h2>
          <button className={styles.button71} role="button">
            More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
