// import type { NextPage } from "next";
import styles from "./CheckoutPage.module.css";

interface CreateProps {
  searchParams?: {
    idcourse: number;
    teachers_idteachers: number;
    desc: string;
    price: string;
    rate: string;
    languages_idlanguages: number;
    image: string;
    // Add other fields if present in your API response
  };
}

const CheckoutPage: React.FC<CreateProps> = ({ searchParams }) => {
  return (
    <div className={styles.checkoutPage}>
      <img className={styles.rectangleIcon}/>
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
        src="/confidentteacherexplaininglessonpupils-1@2x.png"
      />
      <img className={styles.playButtonIcon} alt="" src="/playbutton@2x.png" />
      <div className={styles.adipisingElitSed}>{searchParams?.desc}</div>
      <div className={styles.div1}>${searchParams?.price}</div>
      <div className={styles.subtotal}>Subtotal</div>
      <div className={styles.div2}>$51.38</div>
      <div className={styles.loremIpsumDollar}>Lorem ipsum dollar...</div>
      <div className={styles.checkoutPageItem} />
      <div className={styles.checkoutPageInner} />
      <div className={styles.couponDiscount}>Coupon Discount</div>
      <div className={styles.div3}>0 %</div>
      <div className={styles.checkoutPageChild1} />
      <div className={styles.tax}>TAX</div>
      <div className={styles.div4}>5</div>
      <div className={styles.total}>Total</div>
      <div className={styles.div5}>$56.38</div>
      <img className={styles.lineIcon} alt="" src={searchParams?.image} />
      
    </div>
  );
};
export default CheckoutPage;
