"use client"
import { useSearchParams } from "next/navigation";
import styles from "./CheckoutPage.module.css";

interface OneCourse {
  videos: string | undefined;
  idcourse: number;
  teachers_idteachers: number;
  desc: string;
  price: string;
  rate: string;
  languages_idlanguages: number;
  image: string;
}

const CheckoutPage = () => {
  const search = useSearchParams()
 const params= new URLSearchParams(search.toString())
// console.log("search ",params.get("id"));
const priceM= parseInt(params.get("price"))
const discount =priceM*(10/100) 
const all = priceM-discount
console.log(all);



  return (
    <div >
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
        src={params.get("imagestu")}
      />
      <img className={styles.playButtonIcon} alt="" src="/playbutton@2x.png" />
      <div className={styles.adipisingElitSed}>
        <div style={{border : "3px solid transparent",height:"2cm",width:"11cm" }}>
        {params.get("desc")}
        </div>
      </div>
      <div className={styles.div1}>{params.get("price")} DTN</div>
      <div className={styles.subtotal}>Subtotal</div>
      <div className={styles.div2}>10%</div>
      <div className={styles.checkoutPageItem} />
      <div className={styles.checkoutPageInner} />
      <div className={styles.couponDiscount}>Coupon Discount</div>
      <div className={styles.div3}>0 %</div>
      <div className={styles.checkoutPageChild1} />
      <div className={styles.tax}>TAX</div>
      <div className={styles.div4}>6</div>
      <div className={styles.total}>Total</div>
      <div className={styles.div5}>{all} DTN</div>
      <img className={styles.lineIcon} alt="" src="/line-26@2x.png" />
    </div>
  </div>
  
  );
};
export default CheckoutPage;
