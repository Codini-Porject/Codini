// import type { NextPage } from "next";
import styles from "./CheckoutPage.module.css";

const CheckoutPage = () => {
  return (
    <div className={styles.checkoutPage}>
      <img className={styles.rectangleIcon} alt="" src="/rectangle@2x.png" />
      <div className={styles.checkout}>Checkout</div>
      <div className={styles.summary}>Summary</div>
      <div className={styles.checkoutPageChild} />
      <div className={styles.groupDiv}>
        <div className={styles.groupChild4} />
        <div className={styles.confirmPayment}>
          <a href="https://buy.stripe.com/test_eVafZUdhyavM63u6oo">
            Confirm Payment{" "}
          </a>
        </div>
      </div>
      <img
        className={styles.confidentTeacherExplainingLIcon}
        alt=""
        src="https://i.ytimg.com/vi/o1IaduQICO0/maxresdefault.jpg"
      />
      <img className={styles.playButtonIcon} alt="" src="/playbutton@2x.png" />
      <div className={styles.adipisingElitSed}>
        Javascript courses
      </div>
      <div className={styles.div1}>$24.69</div>
      <div className={styles.subtotal}>Subtotal</div>
      <div className={styles.div2}>$51.38</div>
      <div className={styles.loremIpsumDollar}>Amazing ...</div>
      <div className={styles.checkoutPageItem} />
      <div className={styles.checkoutPageInner} />
      <div className={styles.couponDiscount}>Coupon Discount</div>
      <div className={styles.div3}>0 %</div>
      <div className={styles.checkoutPageChild1} />
      <div className={styles.tax}>TAX</div>
      <div className={styles.div4}>5</div>
      <div className={styles.total}>Total</div>
      <div className={styles.div5}>$56.38</div>
      <img className={styles.lineIcon} alt="" src="/line-26@2x.png" />
    </div>
  );
};
export default CheckoutPage;
