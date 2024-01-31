"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function BottonNavigationbar() {
  const pathname = usePathname();
  return (
    <div className="w-[44rem] h-28 flex justify-center items-center gap-16 rounded-[1.875rem] fixed bottom-5 right-[25vw] bg-[#b5cde12b] z-50">
      <Link href={"/"}>
        {pathname === "/" ?
          <span className='flex flex-col justify-center items-center gap-2'>
            <svg width="45" height="48" viewBox="0 0 45 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.7139 44.4632V37.2212C15.7139 35.3725 17.2236 33.8739 19.0858 33.8739H25.893C26.7873 33.8739 27.6449 34.2265 28.2773 34.8543C28.9096 35.482 29.2648 36.3334 29.2648 37.2212V44.4632C29.2592 45.2317 29.5628 45.9708 30.1082 46.5162C30.6537 47.0617 31.3959 47.3684 32.1701 47.3684H36.8143C38.9834 47.374 41.0655 46.5225 42.6012 45.0019C44.1369 43.4813 45 41.4165 45 39.2633V18.632C45 16.8927 44.2233 15.2428 42.8794 14.1268L27.0806 1.60074C24.3324 -0.595512 20.3947 -0.5246 17.7286 1.76916L2.29029 14.1268C0.882807 15.2099 0.0415712 16.8647 0 18.632V39.2422C0 43.7302 3.66485 47.3684 8.18567 47.3684H12.7238C14.3319 47.3684 15.6387 46.0805 15.6503 44.4842L15.7139 44.4632Z" fill="white" />
            </svg>
            <p className='text-center text-white text-sm'>
              Home
            </p>
          </span> :
          <svg width="45" height="48" viewBox="0 0 45 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.2648 44.4779L31.2648 44.4705V44.4632V37.2212C31.2648 35.7983 30.6953 34.4366 29.6863 33.4349C28.6778 32.4337 27.313 31.8739 25.893 31.8739H19.0858C16.1328 31.8739 13.7139 34.2542 13.7139 37.2212V43.0183L13.6608 43.0359L13.6504 44.4696C13.6469 44.9534 13.2466 45.3684 12.7238 45.3684H8.18567C4.75565 45.3684 2 42.6119 2 39.2422V18.658C2.03343 17.5059 2.5845 16.424 3.50997 15.7119L3.52516 15.7002L3.54012 15.6882L18.9784 3.33055L19.006 3.3084L19.0329 3.28529C20.9697 1.61907 23.8349 1.56711 25.832 3.16314L25.838 3.16793L41.6173 15.6786C42.4964 16.4162 43 17.4972 43 18.632V39.2633C43 40.8805 42.3519 42.4342 41.194 43.5807C40.0356 44.7278 38.4619 45.3726 36.8195 45.3684H36.8143H32.1701C31.9241 45.3684 31.6913 45.2708 31.5224 45.102C31.3541 44.9337 31.2631 44.7087 31.2648 44.4779Z" stroke="white" stroke-width="4" />
          </svg>
        }
      </Link>
      <Link href={"/download"}>
        {pathname === "/download" ?
          <span className='flex flex-col justify-center items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="48" viewBox="0 0 50 48" fill="none">
              <path d="M23.0752 11.9763V1.95376C23.0752 0.888073 23.9253 0 25.0002 0C25.9627 0 26.7782 0.746228 26.9074 1.69145L26.9252 1.95376V11.9763L38.875 11.9771C44.825 11.9771 49.7134 16.8495 49.9878 22.926L50 23.4652V36.0635C50 42.1826 45.2816 47.2055 39.4201 47.4875L38.9 47.5H11.1C5.15 47.5 0.285224 42.652 0.0120945 36.5531L0 36.0118V23.4394C0 17.3203 4.69477 12.273 10.555 11.9896L11.075 11.9771L23.0752 11.9763L23.075 27.983L19.075 23.8525C18.325 23.078 17.1 23.078 16.35 23.8525C15.975 24.2397 15.8 24.756 15.8 25.2724C15.8 25.6648 15.912 26.0737 16.1488 26.4198L16.35 26.6664L23.625 34.2047C23.975 34.592 24.475 34.7985 25 34.7985C25.4167 34.7985 25.8333 34.6551 26.1632 34.3832L26.35 34.2047L33.625 26.6664C34.375 25.8919 34.375 24.6269 33.625 23.8525C32.9432 23.1484 31.8688 23.0844 31.1156 23.6604L30.9 23.8525L26.925 27.983L26.9252 11.9763H23.0752Z" fill="white" />
            </svg>
            <p className='text-center text-white text-sm'>
              Download
            </p>
          </span> :
          <svg width="54" height="50" viewBox="0 0 54 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27 34.5432L27 2" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M34.8811 26.6304L27 34.5439L19.1189 26.6304" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M39.5216 14.7917H42.0432C47.5432 14.7917 52 19.2485 52 24.7512L52 37.9512C52 43.4377 47.5541 47.8836 42.0676 47.8836L11.9595 47.8836C6.45946 47.8836 2 43.4242 2 37.9242L2 24.7215C2 19.2377 6.44865 14.7917 11.9324 14.7917H14.4784" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        }
      </Link>
      <Link href={"https://blog.parchlinux.ir/"}>
        <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.2144 33.7703H13.1899" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M30.2144 23.8987H13.1899" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M19.6861 14.05H13.1899" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M30.668 2C30.668 2 12.566 2.00943 12.5377 2.00943C6.02975 2.04952 2 6.33157 2 12.8631V34.5469C2 41.1114 6.0604 45.41 12.625 45.41C12.625 45.41 30.7246 45.4029 30.7553 45.4029C37.2633 45.3628 41.2954 41.0784 41.2954 34.5469V12.8631C41.2954 6.29856 37.2326 2 30.668 2Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </Link>
      <Link href={"https://wiki.parchlinux.ir/"}>
        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2 9.97222C2 3.99257 2.06403 2 9.97222 2C17.8804 2 17.9444 3.99257 17.9444 9.97222C17.9444 15.9519 17.9697 17.9444 9.97222 17.9444C1.97478 17.9444 2 15.9519 2 9.97222Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M27.0554 9.97222C27.0554 3.99257 27.1194 2 35.0276 2C42.9358 2 42.9999 3.99257 42.9999 9.97222C42.9999 15.9519 43.0251 17.9444 35.0276 17.9444C27.0302 17.9444 27.0554 15.9519 27.0554 9.97222Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2 35.0276C2 29.048 2.06403 27.0554 9.97222 27.0554C17.8804 27.0554 17.9444 29.048 17.9444 35.0276C17.9444 41.0073 17.9697 42.9999 9.97222 42.9999C1.97478 42.9999 2 41.0073 2 35.0276Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M27.0554 35.0276C27.0554 29.048 27.1194 27.0554 35.0276 27.0554C42.9358 27.0554 42.9999 29.048 42.9999 35.0276C42.9999 41.0073 43.0251 42.9999 35.0276 42.9999C27.0302 42.9999 27.0554 41.0073 27.0554 35.0276Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </Link>
      <Link href={"/#privacy"}>
        {pathname === "/#privacy" ?
          <span>
            <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37.4455 4.58154C45.2143 4.58154 50.4163 10.0357 50.4163 18.1482V36.8734C50.4163 44.963 45.2143 50.4149 37.4455 50.4149H17.5768C9.80801 50.4149 4.58301 44.963 4.58301 36.8734V18.1482C4.58301 10.0357 9.80801 4.58154 17.5768 4.58154H37.4455ZM27.4768 24.0172C26.3768 24.0172 25.483 24.9315 25.483 26.0338V36.163C25.483 37.263 26.3768 38.1567 27.4768 38.1567C28.5997 38.1567 29.4934 37.263 29.4934 36.163V26.0338C29.4934 24.9315 28.5997 24.0172 27.4768 24.0172ZM27.5226 16.7526C26.3997 16.7526 25.5059 17.6463 25.5059 18.7692C25.5059 19.867 26.3997 20.763 27.4768 20.763C28.6226 20.763 29.5163 19.867 29.5163 18.7692C29.5163 17.6463 28.6226 16.7526 27.5226 16.7526Z" fill="white" />
            </svg>
            <p className='text-center text-white text-sm'>
              Privacy
            </p>
          </span> :
          <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M37.432 4.58325C45.1985 4.58325 50.4166 10.0328 50.4166 18.1408V36.8591C50.4166 44.967 45.1985 50.4166 37.4274 50.4166H17.5633C9.79909 50.4166 4.58325 44.967 4.58325 36.8591V18.1408C4.58325 10.0328 9.79909 4.58325 17.5633 4.58325H37.432ZM37.432 8.02075H17.5633C11.7676 8.02075 8.02075 11.9922 8.02075 18.1408V36.8591C8.02075 43.0076 11.7676 46.9791 17.5633 46.9791H37.4274C43.2299 46.9791 46.9791 43.0076 46.9791 36.8591V18.1408C46.9791 11.9922 43.2299 8.02075 37.432 8.02075ZM27.4862 25.7812C28.4349 25.7812 29.2049 26.5512 29.2049 27.4999V36.6666C29.2049 37.6153 28.4349 38.3853 27.4862 38.3853C26.5374 38.3853 25.7674 37.6153 25.7674 36.6666V27.4999C25.7674 26.5512 26.5374 25.7812 27.4862 25.7812ZM27.4974 16.5093C28.7647 16.5093 29.7891 17.5337 29.7891 18.801C29.7891 20.0683 28.7647 21.0926 27.4974 21.0926C26.2301 21.0926 25.1943 20.0683 25.1943 18.801C25.1943 17.5337 26.2095 16.5093 27.4745 16.5093H27.4974Z" fill="white" />
          </svg>

        }
      </Link>
      <Link href={"/team"}>
        {pathname === "/team" ?
          <span className='flex flex-col justify-center items-center gap-2'>
            <svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.073 25.9329C24.7889 25.9329 32.146 27.3181 32.146 32.6746C32.146 38.0269 24.7418 39.366 16.073 39.366L15.4809 39.3638C7.02646 39.301 0 37.859 0 32.6243C0 27.272 7.40415 25.9329 16.073 25.9329ZM29.6769 22.7081C32.9917 22.6452 36.5568 23.0916 37.8729 23.4059C40.6633 23.9403 42.4972 25.028 43.2569 26.6144C43.901 27.9137 43.901 29.4226 43.2569 30.7219C42.0949 33.178 38.3458 33.968 36.8885 34.1713C36.5868 34.2132 36.345 33.9617 36.377 33.6642C37.1217 26.8575 31.2006 23.6302 29.6684 22.8883C29.6042 22.8527 29.5892 22.8024 29.5956 22.7689C29.5999 22.7479 29.6277 22.7144 29.6769 22.7081ZM16.073 0C21.9771 0 26.7084 4.63349 26.7084 10.4154C26.7084 16.1973 21.9771 20.8308 16.073 20.8308C10.1711 20.8308 5.43755 16.1973 5.43755 10.4154C5.43755 4.63349 10.1711 0 16.073 0ZM30.2547 1.7396C35.9576 1.7396 40.4344 6.99131 38.9086 12.8403C37.8793 16.7822 34.1537 19.3997 30.0022 19.2928C29.5849 19.2844 29.1762 19.2446 28.7782 19.1796C28.4914 19.1293 28.3459 18.8129 28.5107 18.5782C30.0942 16.296 30.9973 13.5486 30.9973 10.6042C30.9973 7.52779 30.0129 4.66304 28.2988 2.30962C28.2432 2.23627 28.2025 2.1252 28.2582 2.03928C28.301 1.97222 28.3866 1.9345 28.4657 1.91773C29.0435 1.80247 29.6363 1.7396 30.2547 1.7396Z" fill="white" />
            </svg>
            <p className='text-center text-white text-sm'>
              Team
            </p>
          </span> :
          <svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1949 30.302C26.9266 30.302 34.3897 31.6251 34.3897 36.9106C34.3897 42.1961 26.9763 43.5571 18.1949 43.5571C9.46071 43.5571 2 42.2458 2 36.9579C2 31.6701 9.411 30.302 18.1949 30.302Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.195 22.7584C12.4622 22.7584 7.81348 18.112 7.81348 12.3792C7.81348 6.64637 12.4622 2 18.195 2C23.9255 2 28.5743 6.64637 28.5743 12.3792C28.5955 18.0907 23.9799 22.7371 18.2684 22.7584H18.195Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M34.5073 20.0642C38.2969 19.5316 41.2153 16.2794 41.2224 12.3431C41.2224 8.46363 38.3939 5.24454 34.6848 4.63623" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M39.5071 29.1787C43.1783 29.7255 45.7417 31.0131 45.7417 33.6641C45.7417 35.4891 44.5345 36.6726 42.5841 37.4134" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        }
      </Link>
    </div>
  )
}
