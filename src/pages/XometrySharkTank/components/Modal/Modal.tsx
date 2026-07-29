import styles from './Modal.module.css';
import { useModalStore } from '../../store';
import talk from "../../assets/talk.svg"
export default function Modal() {
  const { modal, setModal } = useModalStore();

  if (!modal) return null;

  const handleClose = () => setModal();

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={handleClose}>
          &times;
        </button>

        <div className={styles.header}>
            <h3  style={{fontSize: "27px"}}>Ambassadors</h3>
            <img src={talk}  className={styles.talkIcon} />
        </div>

        <div className={styles.body}>
          <p>
            Xometry Ambassadors are current engineering students who promote Xometry's features at their school.
            Ambassadors can earn:
          </p>
          <ul>
            <li>$60/month base pay</li>
            <li>$10 per referral</li>
            <li>$100/month Xometry credit for builds</li>
            <li>Free Xometry gear (shirts, hats, etc.)</li>
          </ul>
          <p>
            Expectation: 2-3 short videos (~1-2 minutes) per month featuring builds and content for our social media.
            Follower count isn't required — we'll primarily use your content on our pages.
          </p>
        </div>

        {/* Contact form */}
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <h3>Get an interview</h3>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="LinkedIn" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
