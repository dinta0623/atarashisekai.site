import Head from "next/head"
import { Fragment } from "react"
import Image from "next/image"
import styles from "./styles/home.module.scss"

export default function Home() {
  const description: string =
    "Kami adalah salah satu Komunitas Anime dari Indonesia yang berbasis di Discord. Penasaran? Gabung aja yuk :)"
  return (
    <Fragment>
      <Head>
        <title>
          Atarashi Sekai - Komunitas Anime Indonesia yang Berbasis di Discord
        </title>
        <meta title="description" content={description} />
      </Head>
      <main>
        <div id={styles.hero}>
          <div className={styles.wrapper}>
            <section>
              <h1>
                Selamat Datang <br />
                Di Atarashi Sekai
              </h1>
              <p>{description}</p>

              <button className={styles.join_btn}>
                <a  href="https://discord.gg/3QMgZqxDk8">Gabung </a>
              </button>
            </section>
            <img src="/assets/dc.png" />
          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path fill="#f8f8f8" fillOpacity="1" d="M0,64L1440,0L1440,0L0,0Z" />
        </svg>

        <div id={styles.info}>
          <div className={styles.wrapper}>
            <h2>
              Emangnya Ada Apa Aja Sih <br />
              Selain Teman?
            </h2>
            <section>
              <div className={styles.card}>
                <svg
                  width="43"
                  height="43"
                  viewBox="0 0 43 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42.9781 8.71204L21.3941 12.9908V32.62C20.4927 32.0154 19.4093 31.6621 18.2447 31.6621C15.1188 31.6621 12.5757 34.2052 12.5757 37.3311C12.5757 40.457 15.1188 43 18.2447 43C21.1576 43 23.5633 40.7913 23.8778 37.9609H23.9136V22.6185L40.4586 19.3387V27.581C39.5572 26.9764 38.4738 26.623 37.3091 26.623C34.1832 26.623 31.6402 29.1661 31.6402 32.292C31.6402 35.4179 34.1832 37.9609 37.3091 37.9609C40.6624 37.9609 43.318 35.0415 42.9422 31.6621H42.9781V8.71204ZM18.2447 40.4805C16.5081 40.4805 15.0953 39.0677 15.0953 37.3311C15.0953 35.5944 16.5081 34.1816 18.2447 34.1816C19.9813 34.1816 21.3941 35.5944 21.3941 37.3311C21.3941 39.0677 19.9813 40.4805 18.2447 40.4805ZM37.3091 35.4414C35.5725 35.4414 34.1597 34.0286 34.1597 32.292C34.1597 30.5554 35.5725 29.1426 37.3091 29.1426C39.0458 29.1426 40.4586 30.5554 40.4586 32.292C40.4586 34.0286 39.0458 35.4414 37.3091 35.4414ZM40.4586 16.7702L23.9136 20.05V15.06L40.4586 11.7802V16.7702Z"
                    fill="#FF0099"
                  />
                  <path
                    d="M15.2997 13.4165H17.8192C17.8192 10.8128 18.19 7.80643 15.7915 5.40809C15.0383 4.65492 14.3256 4.05846 13.6968 3.53221C12.034 2.14059 11.3593 1.51558 11.3593 0H8.83978V18.5946C7.93829 17.99 6.8549 17.6367 5.69037 17.6367C2.56447 17.6367 0.0214233 20.1798 0.0214233 23.3057C0.0214233 26.4316 2.56447 28.9746 5.69037 28.9746C8.60328 28.9746 11.009 26.7659 11.3235 23.9355H11.3593V4.8527C12.1536 5.54658 13.0455 6.22509 14.01 7.18957C15.6082 8.78787 15.2997 10.8856 15.2997 13.4165ZM5.69037 26.4551C3.95374 26.4551 2.54095 25.0423 2.54095 23.3057C2.54095 21.569 3.95374 20.1562 5.69037 20.1562C7.427 20.1562 8.83978 21.569 8.83978 23.3057C8.83978 25.0423 7.42691 26.4551 5.69037 26.4551Z"
                    fill="#FF0099"
                  />
                </svg>
                <div className={styles.content}>
                  <h3>Music</h3>
                  <span>
                    banyak bot siap memutar music apapun yang kamu inginkan
                  </span>
                </div>
              </div>
              <div className={styles.card}>
                <svg
                  width="67"
                  height="67"
                  viewBox="0 0 67 67"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M66.9641 41.9304C66.7972 38.0916 66.1296 33.8356 65.1282 29.8299C64.1268 25.9912 62.875 22.4028 61.3729 19.6489C55.5313 9.38435 49.189 10.9699 41.5949 12.9728C39.1748 13.5569 36.5878 14.2245 33.9174 14.4749H33.0828C30.4124 14.2245 27.8254 13.5569 25.4053 12.9728C17.8112 11.0534 11.4689 9.38435 5.62733 19.7323C4.1252 22.4862 2.78998 26.0746 1.87202 29.9134C0.870598 33.9191 0.202987 38.1751 0.0360845 42.0138C-0.130818 46.2699 0.286439 49.3576 1.2044 51.5273C2.12237 53.5301 3.45759 54.7819 5.21007 55.2826C6.79565 55.6999 8.63158 55.533 10.551 54.6985C13.8056 53.3632 17.5609 50.5259 21.2327 47.1044C23.8197 44.6008 28.6599 43.3491 33.5001 43.3491C38.3403 43.3491 43.1805 44.6008 45.7675 47.1044C49.4393 50.5259 53.1946 53.3632 56.4492 54.6985C58.3686 55.4495 60.2045 55.6999 61.7901 55.2826C63.4591 54.7819 64.8778 53.6136 65.7958 51.4439C66.7137 49.3576 67.131 46.2699 66.9641 41.9304ZM62.9584 50.2755C62.4577 51.4439 61.7901 52.1115 60.9556 52.3618C60.0376 52.6122 58.8693 52.4453 57.5341 51.9446C54.6133 50.7762 51.1918 48.1893 47.8537 45.0181C44.6826 41.8469 39.0913 40.2614 33.5001 40.2614C27.9089 40.2614 22.3176 41.8469 19.063 44.8512C15.6415 48.0224 12.22 50.6928 9.38264 51.7777C8.04742 52.2784 6.8791 52.5287 5.96113 52.1949C5.12662 51.9446 4.45901 51.277 3.9583 50.1086C3.29069 48.5231 2.95688 45.9361 3.12379 42.0973C3.29069 38.5089 3.87485 34.4198 4.87627 30.581C5.79423 26.9926 6.96255 23.6545 8.38123 21.151C12.9711 12.8893 18.3119 14.2245 24.6542 15.8936C27.2412 16.5612 29.9117 17.2288 32.8325 17.4791C32.9159 17.4791 32.9159 17.4791 32.9994 17.4791H33.9174C34.0008 17.4791 34.0008 17.4791 34.0843 17.4791C37.0885 17.2288 39.759 16.5612 42.3459 15.8936C48.6883 14.308 54.0291 12.8893 58.619 21.151C60.0376 23.6545 61.206 26.9091 62.1239 30.581C63.0419 34.4198 63.7095 38.4254 63.8764 42.0973C64.0433 45.9361 63.7095 48.5231 62.9584 50.2755Z"
                      fill="#FFD540"
                    />
                    <path
                      d="M25.8226 25.6573C24.9881 24.9063 23.9867 24.3221 22.8183 24.2387C22.7349 23.1538 22.2342 22.0689 21.4831 21.3179L21.3997 21.2344C20.4817 20.3164 19.3134 19.8157 17.9782 19.8157C16.6429 19.8157 15.3912 20.3999 14.5566 21.2344C13.8056 21.9855 13.2214 23.0703 13.138 24.2387C11.9697 24.3221 10.9682 24.8228 10.1337 25.5739L10.0503 25.6573C9.13231 26.5753 8.6316 27.7436 8.6316 29.0788C8.6316 30.4141 9.21576 31.6658 10.0503 32.5003C10.8848 33.3349 11.8862 33.8356 13.138 33.919C13.2214 35.0873 13.7221 36.1722 14.5566 36.9233C15.4746 37.8412 16.6429 38.3419 17.9782 38.3419C19.3134 38.3419 20.5652 37.7578 21.3997 36.9233C22.1507 36.0888 22.7349 35.0873 22.8183 33.919C23.9867 33.8356 25.0715 33.3349 25.8226 32.5003C26.7406 31.5824 27.2413 30.4141 27.2413 29.0788C27.2413 27.7436 26.6571 26.4918 25.8226 25.6573ZM23.7363 30.3306C23.4025 30.6644 22.9852 30.8313 22.4845 30.8313H21.3162C20.4817 30.8313 19.7306 31.4989 19.7306 32.4169V33.5018C19.7306 34.0025 19.5637 34.4197 19.2299 34.7535C18.8961 35.0873 18.4789 35.2542 17.9782 35.2542C17.4774 35.2542 17.0602 35.0873 16.7264 34.7535C16.3926 34.4197 16.2257 34.0025 16.2257 33.5018V32.3334C16.2257 31.4989 15.5581 30.7479 14.6401 30.7479H13.4718C12.9711 30.7479 12.5538 30.581 12.22 30.2472C11.9697 29.9968 11.7193 29.5795 11.7193 29.0788C11.7193 28.5781 11.8862 28.1609 12.22 27.8271C12.22 27.8271 12.22 27.8271 12.3035 27.7436C12.6373 27.4933 13.0545 27.3264 13.4718 27.3264H14.6401C15.4746 27.3264 16.2257 26.6587 16.2257 25.7408V24.5725C16.2257 24.0718 16.3926 23.6545 16.7264 23.3207C17.0602 22.9869 17.4774 22.82 17.9782 22.82C18.4789 22.82 18.8961 22.9869 19.2299 23.3207C19.2299 23.3207 19.2299 23.3207 19.3134 23.4041C19.5637 23.738 19.7306 24.1552 19.7306 24.5725V25.7408C19.7306 26.5753 20.3982 27.3264 21.3162 27.3264H22.4845C22.9852 27.3264 23.4025 27.4933 23.7363 27.8271C24.0701 28.1609 24.237 28.5781 24.237 29.0788C24.237 29.5795 24.0701 29.9968 23.7363 30.3306Z"
                      fill="#FFD540"
                    />
                    <path
                      d="M48.0207 26.0746C49.6338 26.0746 50.9414 24.7669 50.9414 23.1538C50.9414 21.5407 49.6338 20.233 48.0207 20.233C46.4075 20.233 45.0999 21.5407 45.0999 23.1538C45.0999 24.7669 46.4075 26.0746 48.0207 26.0746Z"
                      fill="#FFD540"
                    />
                    <path
                      d="M48.0207 37.9247C49.6338 37.9247 50.9414 36.617 50.9414 35.0039C50.9414 33.3908 49.6338 32.0831 48.0207 32.0831C46.4075 32.0831 45.0999 33.3908 45.0999 35.0039C45.0999 36.617 46.4075 37.9247 48.0207 37.9247Z"
                      fill="#FFD540"
                    />
                    <path
                      d="M42.0956 31.9997C43.7087 31.9997 45.0164 30.692 45.0164 29.0789C45.0164 27.4658 43.7087 26.1581 42.0956 26.1581C40.4825 26.1581 39.1748 27.4658 39.1748 29.0789C39.1748 30.692 40.4825 31.9997 42.0956 31.9997Z"
                      fill="#FFD540"
                    />
                    <path
                      d="M53.9457 31.9997C55.5588 31.9997 56.8665 30.692 56.8665 29.0789C56.8665 27.4658 55.5588 26.1581 53.9457 26.1581C52.3326 26.1581 51.0249 27.4658 51.0249 29.0789C51.0249 30.692 52.3326 31.9997 53.9457 31.9997Z"
                      fill="#FFD540"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="67" height="67" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className={styles.content}>
                  <h3>Games</h3>
                  <span>ada bot game yang bisa menghilangkan kebosananmu</span>
                </div>
              </div>
              <div className={styles.card}>
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M53.7497 12.5889C53.5493 12.3525 53.2552 12.2163 52.9453 12.2163H10.9836L9.55304 5.13297C9.45369 4.64096 9.02127 4.28711 8.51924 4.28711H1.05469C0.472184 4.28711 0 4.75929 0 5.3418C0 5.9243 0.472184 6.39648 1.05469 6.39648H7.65619L14.6324 40.937C13.5567 41.851 12.8729 43.214 12.8729 44.734C12.8729 47.4793 15.1037 49.7129 17.8457 49.7129C20.5878 49.7129 22.8187 47.4794 22.8187 44.734C22.8187 43.6662 22.4812 42.6759 21.9075 41.8644H38.1045C37.5308 42.6759 37.1933 43.6662 37.1933 44.734C37.1933 47.4793 39.4241 49.7129 42.1662 49.7129C44.9083 49.7129 47.1392 47.4794 47.1392 44.734C47.1392 43.6624 46.7992 42.6688 46.2218 41.8555C46.7394 41.7882 47.1392 41.3457 47.1392 40.8097C47.1392 40.2272 46.667 39.755 46.0845 39.755H16.5456L16.0965 37.5317H45.2107C47.9811 37.5317 50.3207 35.5479 50.7739 32.8149L53.9858 13.4435C54.0365 13.1377 53.9501 12.8252 53.7497 12.5889ZM20.7093 44.734C20.7093 46.3162 19.4247 47.6035 17.8457 47.6035C16.2668 47.6035 14.9823 46.3163 14.9823 44.734C14.9823 43.1516 16.2669 41.8644 17.8457 41.8644C19.4248 41.8644 20.7093 43.1517 20.7093 44.734ZM42.1663 47.6035C40.5873 47.6035 39.3028 46.3163 39.3028 44.734C39.3028 43.1516 40.5874 41.8644 42.1663 41.8644C43.7453 41.8644 45.0299 43.1517 45.0299 44.734C45.0299 46.3162 43.7453 47.6035 42.1663 47.6035ZM48.693 32.4699C48.4094 34.1807 46.9448 35.4224 45.2107 35.4224H15.6707L11.4097 14.3257H51.7014L48.693 32.4699Z"
                    fill="#0085FF"
                  />
                  <path
                    d="M28.8898 31.9859C28.9643 32.5054 29.4091 32.8911 29.9338 32.8911H33.8265C34.3512 32.8911 34.796 32.5054 34.8705 31.9859L36.8652 18.0611C36.9086 17.7584 36.8184 17.4517 36.6181 17.2206C36.4178 16.9897 36.1271 16.8569 35.8212 16.8569H27.9392C27.6335 16.8569 27.3427 16.9897 27.1423 17.2206C26.942 17.4517 26.8518 17.7584 26.8952 18.0611L28.8898 31.9859ZM34.6046 18.9662L32.9121 30.7817H30.8481L29.1557 18.9662H34.6046Z"
                    fill="#0085FF"
                  />
                  <path
                    d="M39.1535 32.8911H44.3059C44.7993 32.8911 45.2266 32.5492 45.3348 32.0678L48.4663 18.143C48.5367 17.8305 48.461 17.5029 48.2609 17.2527C48.0608 17.0025 47.7577 16.857 47.4373 16.857H41.1482C40.6235 16.857 40.1787 17.2427 40.1042 17.7621L38.1095 31.687C38.0661 31.9897 38.1563 32.2964 38.3566 32.5274C38.557 32.7584 38.8478 32.8911 39.1535 32.8911ZM42.0627 18.9663H46.1192L43.462 30.7817H40.3701L42.0627 18.9663Z"
                    fill="#0085FF"
                  />
                  <path
                    d="M15.289 18.1204L18.1015 32.0452C18.2008 32.5372 18.6332 32.8911 19.1353 32.8911H24.6067C24.9124 32.8911 25.2032 32.7583 25.4036 32.5273C25.6039 32.2962 25.694 31.9895 25.6507 31.6868L23.656 17.762C23.5815 17.2426 23.1366 16.8569 22.6119 16.8569H16.3228C16.0065 16.8569 15.7069 16.9988 15.5066 17.2436C15.3062 17.4885 15.2264 17.8103 15.289 18.1204ZM21.6976 18.9662L23.3902 30.7817H19.9983L17.612 18.9662H21.6976Z"
                    fill="#0085FF"
                  />
                </svg>

                <div className={styles.content}>
                  <h3>Marketplace</h3>
                  <span>kamu bisa buka lapak dan berjualan disini</span>
                </div>
              </div>
              <div className={styles.card}>
                <svg
                  width="47"
                  height="47"
                  viewBox="0 0 47 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M47 23.5V6.94941C47 3.16792 43.9235 0.0914307 40.142 0.0914307H33.4669C29.6854 0.0914307 26.6089 3.16792 26.6089 6.94941V23.5C26.6089 28.6315 30.4369 32.8851 35.3872 33.5568V44.1654H28.7422C27.9847 44.1654 27.3706 44.7795 27.3706 45.537C27.3706 46.2944 27.9847 46.9086 28.7422 46.9086H44.0096C44.767 46.9086 45.3812 46.2944 45.3812 45.537C45.3812 44.7795 44.767 44.1654 44.0096 44.1654H38.1304V33.5584C43.1311 32.8921 47 28.6357 47 23.5ZM29.3521 6.94941C29.3521 4.68051 31.198 2.83462 33.4669 2.83462H40.142C42.4109 2.83462 44.2568 4.68051 44.2568 6.94941V10.4241H29.3521V6.94941ZM36.7588 30.9066C33.1435 30.9066 30.1268 28.3023 29.4815 24.8716H31.6381C32.3956 24.8716 33.0097 24.2575 33.0097 23.5C33.0097 22.7425 32.3956 22.1284 31.6381 22.1284H29.3521V19.0194H31.6381C32.3956 19.0194 33.0097 18.4053 33.0097 17.6479C33.0097 16.8904 32.3956 16.2763 31.6381 16.2763H29.3521V13.1673H44.2568V16.2763H41.8794C41.1219 16.2763 40.5078 16.8904 40.5078 17.6479C40.5078 18.4053 41.1219 19.0194 41.8794 19.0194H44.2568V22.1284H41.8794C41.1219 22.1284 40.5078 22.7425 40.5078 23.5C40.5078 24.2575 41.1219 24.8716 41.8794 24.8716H44.1258C43.4725 28.3023 40.4186 30.9066 36.7588 30.9066Z"
                      fill="#00E95D"
                    />
                    <path
                      d="M21.9455 15.9835V4.20622C21.9455 1.93732 20.0996 0.0914307 17.8307 0.0914307H4.11479C1.84589 0.0914307 0 1.93732 0 4.20622V17.0992C0 19.3681 1.84589 21.214 4.11479 21.214H16.523L18.9549 22.734C19.4061 23.0159 19.9094 23.1555 20.411 23.1555C20.9964 23.1555 21.5793 22.9652 22.073 22.5885C22.9894 21.8892 23.3676 20.7237 23.0363 19.6195L21.9455 15.9835ZM20.4088 20.4078L17.6433 18.6793C17.4253 18.543 17.1734 18.4708 16.9163 18.4708H4.11479C3.35849 18.4708 2.74319 17.8555 2.74319 17.0992V4.20622C2.74319 3.44992 3.35849 2.83462 4.11479 2.83462H17.8307C18.587 2.83462 19.2023 3.44992 19.2023 4.20622V16.1848C19.2023 16.3183 19.2218 16.4511 19.2602 16.5789L20.4088 20.4078Z"
                      fill="#00E95D"
                    />
                    <path
                      d="M12.5272 12.6187H9.60117C8.84368 12.6187 8.22957 13.2328 8.22957 13.9902C8.22957 14.7477 8.84368 15.3618 9.60117 15.3618H12.5272C13.2847 15.3618 13.8988 14.7477 13.8988 13.9902C13.8988 13.2328 13.2847 12.6187 12.5272 12.6187Z"
                      fill="#00E95D"
                    />
                    <path
                      d="M14.7218 6.03503H7.40661C6.64913 6.03503 6.03502 6.64914 6.03502 7.40663C6.03502 8.16412 6.64913 8.77822 7.40661 8.77822H14.7218C15.4793 8.77822 16.0934 8.16412 16.0934 7.40663C16.0934 6.64914 15.4793 6.03503 14.7218 6.03503Z"
                      fill="#00E95D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="47" height="47" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className={styles.content}>
                  <h3>Podcast</h3>
                  <span>kami menyelenggarakan podcast setiap bulannya</span>
                </div>
              </div>
              <div className={styles.card}>
                <svg
                  width="51"
                  height="51"
                  viewBox="0 0 51 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M41.0527 12.0138C41.4217 12.2269 41.8801 12.2269 42.2492 12.0138L45.4827 10.1468C45.8517 9.93381 46.0809 9.53684 46.0809 9.11081C46.0809 8.68468 45.8517 8.28762 45.4827 8.0747L42.2492 6.20773C41.8802 5.99462 41.4218 5.99482 41.0527 6.20773C40.6837 6.42085 40.4545 6.81781 40.4545 7.24384V10.9777C40.4545 11.4037 40.6837 11.8008 41.0527 12.0138ZM41.9476 7.75777L44.291 9.11081L41.9476 10.464V7.75777Z"
                    fill="#FF3E3E"
                  />
                  <path
                    d="M48.1802 17.774H37.8095C36.7131 17.774 35.8211 18.666 35.8211 19.7625V30.1333C35.8211 31.2297 36.7131 32.1217 37.8095 32.1217H48.1802C49.2767 32.1217 50.1687 31.2297 50.1687 30.1333V19.7625C50.1687 18.666 49.2767 17.774 48.1802 17.774ZM48.6756 30.1333C48.6756 30.4063 48.4534 30.6286 48.1802 30.6286H37.8095C37.5364 30.6286 37.3142 30.4064 37.3142 30.1333V19.7625C37.3142 19.4894 37.5363 19.2671 37.8095 19.2671H48.1802C48.4533 19.2671 48.6756 19.4893 48.6756 19.7625V30.1333Z"
                    fill="#FF3E3E"
                  />
                  <path
                    d="M42.9949 22.7335C41.1435 22.7335 39.6373 24.2398 39.6373 26.0911C39.6373 27.9426 41.1436 29.4488 42.9949 29.4488C44.8463 29.4488 46.3525 27.9425 46.3525 26.0911C46.3525 24.2398 44.8463 22.7335 42.9949 22.7335ZM42.9949 27.9558C41.9669 27.9558 41.1304 27.1193 41.1304 26.0912C41.1304 25.0632 41.9669 24.2267 42.9949 24.2267C44.023 24.2267 44.8594 25.0632 44.8594 26.0912C44.8594 27.1192 44.023 27.9558 42.9949 27.9558Z"
                    fill="#FF3E3E"
                  />
                  <path
                    d="M46.5348 20.4214C46.1225 20.4214 45.7883 20.7555 45.7883 21.1679V21.8167C45.7883 22.2291 46.1225 22.5633 46.5348 22.5633C46.9472 22.5633 47.2814 22.2291 47.2814 21.8167V21.1679C47.2814 20.7556 46.9472 20.4214 46.5348 20.4214Z"
                    fill="#FF3E3E"
                  />
                  <path
                    d="M42.1096 42.2968C42.0495 42.3569 41.9514 42.3571 41.8913 42.2968L41.4807 41.8862C41.1891 41.5947 40.7165 41.5947 40.4249 41.8862C40.1333 42.1778 40.1333 42.6504 40.4249 42.942L40.8355 43.3526C41.4777 43.9948 42.5229 43.9947 43.1654 43.3526L45.3012 41.2168C45.9433 40.5744 45.9433 39.5293 45.3011 38.8868L44.8905 38.4763C44.5986 38.1848 44.1259 38.1848 43.8347 38.4764C43.5432 38.7681 43.5432 39.2407 43.8348 39.5322L44.2453 39.9426C44.3055 40.0028 44.3055 40.1008 44.2453 40.161L42.1096 42.2968Z"
                    fill="#FF3E3E"
                  />
                  <path
                    d="M25.928 12.0941C25.9279 12.0941 25.9279 12.0941 25.928 12.0941C25.5156 12.0941 25.1814 12.4283 25.1814 12.8406V13.2296L20.8379 15.0362C20.8165 14.643 20.4919 14.3305 20.0935 14.3305C20.0934 14.3305 20.0934 14.3305 20.0934 14.3305C19.6811 14.3305 19.3468 14.6646 19.3468 15.0769V15.6563L15.9928 17.0515C10.7333 17.051 13.1386 17.0512 7.58374 17.0507C7.58354 17.0507 7.58364 17.0507 7.58344 17.0507C6.37184 17.0507 5.386 18.0365 5.3858 19.2482V19.4439L4.50557 19.4438V19.3964C4.50557 18.984 4.17141 18.6497 3.75912 18.6497C3.75902 18.6497 3.75902 18.6497 3.75902 18.6497C3.34673 18.6497 3.01247 18.9839 3.01247 19.3962V19.5068C1.31203 19.822 0.000199102 21.3138 2.26832e-08 23.1366C-0.000199057 24.9578 1.31004 26.451 3.01168 26.7668V26.8774C3.01168 27.2898 3.34583 27.624 3.75812 27.624H3.75822C4.17052 27.624 4.50477 27.2899 4.50477 26.8776V26.83L5.385 26.8301V27.0258C5.3849 27.6128 5.61345 28.1647 6.02853 28.5799C6.44361 28.9951 6.99556 29.2237 7.58254 29.2237H7.78212L7.78202 31.6285C7.78202 32.0408 8.11617 32.375 8.52857 32.375C8.94086 32.375 9.27512 32.0409 9.27512 31.6285L9.27522 29.2238L12.908 29.2241L12.9078 31.5841C12.9078 31.6187 12.8875 31.6506 12.8563 31.6651L11.7713 32.1735C11.2178 32.4327 10.8602 32.995 10.86 33.6064L10.8597 36.8476C10.8597 37.1598 10.607 37.4128 10.2943 37.4128H9.84C9.52755 37.4128 9.27462 37.1599 9.27462 36.8473L9.27482 34.949C9.27482 34.5366 8.94066 34.2024 8.52837 34.2024C8.52827 34.2024 8.52827 34.2024 8.52827 34.2024C8.11598 34.2024 7.78172 34.5366 7.78172 34.9488L7.78152 36.8471C7.78132 37.9848 8.70197 38.9057 9.8399 38.9058H10.2944C11.4319 38.9058 12.3528 37.9852 12.3528 36.8477L12.3531 33.6067C12.3531 33.5721 12.3733 33.5404 12.4046 33.5257L13.4898 33.0173C14.0432 32.758 14.4007 32.1956 14.4009 31.5844L14.4011 29.2243L15.9913 29.2244L19.3454 30.6202V31.1995C19.3454 31.6119 19.6795 31.9461 20.0918 31.9461H20.0919C20.4904 31.9461 20.815 31.6338 20.8364 31.2407L25.1795 33.048V33.4368C25.1795 33.8492 25.5136 34.1835 25.9259 34.1835H25.926C26.3383 34.1835 26.6726 33.8493 26.6726 33.437L26.6727 32.5504C26.6727 32.5503 26.6727 32.5502 26.6727 32.5501L26.6735 23.1388L26.6744 12.8407C26.6745 12.4284 26.3402 12.0941 25.928 12.0941ZM9.56169 18.544C9.92909 18.544 12.3781 18.5442 12.621 18.5442L12.6209 19.6061C12.6209 19.9111 12.3741 20.1581 12.0689 20.1581H12.0688C12.0688 20.1581 12.0688 20.1581 12.0687 20.1581L10.1136 20.158C9.80855 20.158 9.56149 19.9112 9.56149 19.6058L9.56169 18.544ZM1.4931 23.1367C1.4931 22.1527 2.13403 21.3304 3.01217 21.0455L3.01177 25.2281C2.13364 24.943 1.4929 24.1207 1.4931 23.1367ZM4.50487 25.3369L4.50527 20.9369H5.3854C5.3853 21.6083 5.3851 24.6466 5.3851 25.3369H4.50487ZM7.08434 27.5243C6.95136 27.3912 6.8781 27.2142 6.8781 27.026C6.8783 25.0889 6.8786 21.1753 6.8788 19.2484C6.8788 19.0601 6.95216 18.8832 7.08524 18.7501C7.21833 18.6171 7.39521 18.5438 7.58334 18.5438H7.58344H8.06859L8.06849 19.6056C8.0683 20.7334 8.98575 21.6509 10.1136 21.6511L12.0687 21.6512H12.069C13.1994 21.6512 14.1141 20.7365 14.1141 19.6062L14.1142 18.5443L15.395 18.5444C15.3949 19.6562 15.3943 26.6387 15.3942 27.7312L7.58274 27.7305C7.39441 27.7306 7.21743 27.6574 7.08434 27.5243ZM16.8872 27.9801C16.8873 26.8767 16.888 19.408 16.8881 18.2961L19.3465 17.2736L19.3455 29.0031L16.8872 27.9801ZM20.8386 29.6244L20.8397 16.6524L25.1812 14.8467L25.1805 23.1363L25.1798 31.4308L20.8386 29.6244Z"
                    fill="#FF3E3E"
                  />
                  <path
                    d="M32.6789 22.3903H29.681C29.2686 22.3903 28.9344 22.7244 28.9344 23.1368C28.9344 23.5492 29.2686 23.8834 29.681 23.8834H32.6789C33.0913 23.8834 33.4255 23.5492 33.4255 23.1368C33.4255 22.7244 33.0912 22.3903 32.6789 22.3903Z"
                    fill="#FF3E3E"
                  />
                  <path
                    d="M29.3095 16.8315L31.4293 14.7116C31.7208 14.42 31.7208 13.9473 31.4292 13.6559C31.1377 13.3644 30.665 13.3643 30.3735 13.656L28.2537 15.7759C27.9621 16.0674 27.9621 16.5401 28.2538 16.8316C28.5452 17.123 29.0179 17.1231 29.3095 16.8315Z"
                    fill="#FF3E3E"
                  />
                  <path
                    d="M29.252 29.4182C28.9603 29.1267 28.4877 29.1267 28.1961 29.4182C27.9046 29.7098 27.9046 30.1824 28.1961 30.474L30.316 32.5939C30.6078 32.8854 31.0803 32.8854 31.3719 32.5939C31.6634 32.3022 31.6634 31.8296 31.3719 31.5381L29.252 29.4182Z"
                    fill="#FF3E3E"
                  />
                  <path
                    d="M42.9949 33.907C39.0581 33.907 35.8553 37.1098 35.8553 41.0466C35.8553 42.151 36.1132 43.2445 36.6035 44.2288L35.8808 46.9257C35.8118 47.1834 35.8854 47.4582 36.0739 47.6469C36.2626 47.8355 36.5376 47.9091 36.7951 47.84L39.3144 47.165C40.424 47.8342 41.6891 48.1862 42.9949 48.1862C44.6082 48.1862 46.1316 47.6594 47.4005 46.6628C47.7247 46.4081 47.7812 45.9389 47.5266 45.6146C47.2718 45.2904 46.8027 45.2342 46.4783 45.4886C45.475 46.2765 44.2705 46.6931 42.995 46.6931C41.8705 46.6931 40.7844 46.3632 39.854 45.739C39.675 45.6189 39.453 45.582 39.2448 45.6379L37.6578 46.0631L38.1212 44.3333C38.1713 44.1465 38.1469 43.9475 38.0532 43.7783C37.5922 42.9463 37.3485 42.0017 37.3485 41.0466C37.3485 37.9332 39.8815 35.4001 42.995 35.4001C46.1085 35.4001 48.6415 37.9331 48.6415 41.0466C48.6415 41.8679 48.4677 42.6615 48.125 43.4054C47.9525 43.7798 48.1161 44.2233 48.4906 44.3958C48.865 44.5684 49.3085 44.4047 49.481 44.0302C49.9147 43.0889 50.1346 42.0851 50.1346 41.0465C50.1344 37.1097 46.9316 33.907 42.9949 33.907Z"
                    fill="#FF3E3E"
                  />
                  <path
                    d="M48.7839 2.81406H41.8763C41.4639 2.81406 41.1297 3.14822 41.1297 3.56061C41.1297 3.97301 41.4639 4.30716 41.8763 4.30716H48.7839C49.1826 4.30716 49.507 4.63156 49.507 5.03022V13.1916C49.507 13.5902 49.1826 13.9146 48.7839 13.9146H37.2059C36.8071 13.9146 36.4827 13.5902 36.4827 13.1916V5.03012C36.4827 4.63146 36.8071 4.30706 37.2059 4.30706H38.8914C39.3038 4.30706 39.6379 3.97291 39.6379 3.56051C39.6379 3.14812 39.3038 2.81396 38.8914 2.81396H37.2059C35.9839 2.81396 34.9896 3.80807 34.9896 5.03012V13.1915C34.9896 14.4134 35.9838 15.4076 37.2059 15.4076H48.7838C50.0058 15.4076 51 14.4135 51 13.1915V5.03012C51 3.80817 50.0059 2.81406 48.7839 2.81406Z"
                    fill="#FF3E3E"
                  />
                </svg>

                <div className={styles.content}>
                  <h3>Creator Support</h3>
                  <span>kamu content creator? sharing contentmu disini</span>
                </div>
              </div>
              <div className={styles.card}>
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M37.3237 7.52151C36.694 8.4871 35.6274 9.06347 34.4706 9.06347H9.45797C8.30195 9.06347 7.23533 8.4871 6.60466 7.52168L2.67277 1.50338C4.44622 2.17295 6.27 2.75561 8.10248 3.23767C8.44694 3.32828 8.80002 3.12245 8.8908 2.77772C8.9815 2.433 8.77558 2.0801 8.43085 1.98931C6.45673 1.46999 4.49303 0.831227 2.59403 0.090578C2.14588 -0.0842796 1.64075 0.049187 1.33759 0.422566C1.03503 0.795257 1.00827 1.3157 1.2709 1.71756L5.5241 8.22774C6.27344 9.37481 7.46888 10.1221 8.80415 10.3077V14.4994H5.78295C5.42643 14.4994 5.13756 14.7883 5.13756 15.1448V18.9873C5.13756 19.3438 5.42643 19.6327 5.78295 19.6327H8.80406V33.7122H8.18027C7.82376 33.7122 7.53488 34.0012 7.53488 34.3576V42.7094H2.77457C2.41806 42.7094 2.12918 42.9983 2.12918 43.3547C2.12918 43.7112 2.41806 44.0001 2.77457 44.0001H41.2257C42.0662 43.9752 42.0939 42.7455 41.2257 42.7094H36.4654V34.3576C36.4654 34.0012 36.1765 33.7122 35.82 33.7122H35.3843V19.6326H38.2174C38.5739 19.6326 38.8628 19.3437 38.8628 18.9872V15.1447C38.8628 14.7883 38.5739 14.4993 38.2174 14.4993H35.3843V10.2648C36.615 10.0233 37.7052 9.29951 38.4051 8.22662L42.7344 1.69398C42.9925 1.29212 42.9626 0.774089 42.6601 0.404754C42.356 0.0335255 41.8509 -0.0985642 41.4033 0.0764655C31.743 3.87127 21.0973 4.74625 10.9586 2.58944C10.61 2.51569 10.2674 2.73831 10.1935 3.08699C10.1196 3.43568 10.3423 3.77825 10.691 3.85217C20.8815 6.02033 31.5875 5.19768 41.3308 1.48746L37.3237 7.52151ZM30.2389 15.7901V18.3419H23.3529C22.9964 18.3419 22.7076 18.6308 22.7076 18.9872C22.7076 19.3437 22.9964 19.6326 23.3529 19.6326H30.2389V33.7121H29.6151C29.2586 33.7121 28.9697 34.0011 28.9697 34.3575V42.7093H15.0305V34.3575C15.0305 34.0011 14.7416 33.7121 14.3851 33.7121H13.9494V19.6326H20.781C21.1375 19.6326 21.4264 19.3437 21.4264 18.9872C21.4264 18.6308 21.1375 18.3419 20.781 18.3419H13.9494V15.7901H30.2389ZM13.9493 14.4993V10.3543H19.4274V14.4993H13.9493ZM30.2389 14.4993H24.5727V10.3543H30.2389V14.4993ZM23.282 10.3543V14.4993H20.7182V10.3543H23.282ZM6.42834 18.3419V15.7901H8.80406V18.3419H6.42834ZM10.0948 10.3543H12.6585V33.7121H10.0948V10.3543ZM8.82566 42.7093V35.0029H13.7397V42.7093H8.82566ZM30.2605 42.7093V35.0029H35.1745V42.7093H30.2605ZM31.5297 33.7121V10.3543H34.0934V33.7121H31.5297ZM37.5719 15.7901V18.3419H35.3842V15.7901H37.5719Z"
                      fill="#BD00FF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="44" height="44" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <div className={styles.content}>
                  <h3>Anime</h3>
                  <span>tentunya segala hal berbau anime, streaming?</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <footer>
        <div id={styles.banner}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L1440,0L1440,0L0,0Z" />
          </svg>
          <div className={styles.wrapper}>
            <h2>Gabung Sekarang</h2>
            <a href="https://discord.com/invite/Vr5HR6B">
              <button className={styles.join_btn}>Gabung</button>
            </a>
          </div>
        </div>
        <div id={styles.footer_content}>
          <div className={styles.wrapper}>
            <div className={styles.container}>
              <div className="box">
                <h3>Founder</h3>
                <span>
                  Bang Ali <br /> Neng Ferlia <br />
                </span>
              </div>
              <div className="box">
                <h3>Developer</h3>
                <span>Dinta Alif</span>
              </div>
              <div className="box">
                <h3>Pilar</h3>
                <span>
                  Patang <br /> Cyril <br /> Vigo
                </span>
              </div>
              <div className="box">
                <h3>Legal</h3>
                <span>Privacy Policy</span>
              </div>
              <div className="box">
                <h3>Tentang Kami</h3>
              </div>
            </div>
            <h2>Atarashi Sekai</h2>
            <p>Copyright 2020 ATS. All rights reserved</p>
          </div>
        </div>
      </footer>
    </Fragment>
  )
}
