module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        RD:"PP Right Didone"
      },
      colors: {
        red: "#E01111",
        green: "#288E3E",
        brown: "#672B11",
        yellow: "#DBBB76",
        skin: "#F3EEE5",
        gray: "#EAEAEA"
      },
      fontSize: {
        // desktop
        DH1: ['80px', {
          lineHeight: '72px',
          fontWeight: '400',
        }],
        DH2: ['45px', {
          lineHeight: '40.5px',
          fontWeight: '300',
        }],
        DH3: ['28px', {
          lineHeight: '25.2px',
          fontWeight: '400',
        }],
        DB1: ['20px', {
          lineHeight: '18px',
          fontWeight: '400',
        }],
        DB2: ['16px', {
          lineHeight: '19.2px',
          fontWeight: '400',
        }],
        DNAV: ['16px', {
          lineHeight: '16px',
          fontWeight: '600',
        }],
        DDIS2: ['120px', {
          lineHeight: '96px',
          fontWeight: '400',
        }],
        DDIS1: ['300px', {
          lineHeight: '240px',
          fontWeight: '400',
        }],
        DDISO: ['300px', {
          lineHeight: '240px',
          fontWeight: '400',
        }],
        // mobile
        MH1: ['32px', {
          lineHeight: '28.8px',
          fontWeight: '400',
        }],
        MDIS2: ['64px', {
          lineHeight: '51.2px',
          fontWeight: '400',
        }],
        MDIS1: ['150px', {
          lineHeight: '120px',
          fontWeight: '400',
        }],
        MDISO: ['64px', {
          lineHeight: '51.2px',
          fontWeight: '400',
        }],
        MNAV: ['64px', {
          lineHeight: '51.2px',
          fontWeight: '400',
        }],
        // logo&Nav
        DLOGO: ['40px', {
          lineHeight: '40px',
          fontWeight: '300',
        }],
        MLOGO: ['24px', {
          lineHeight: '40px',
          fontWeight: '300',
        }],
      },
      size: {
        'DB' : '64px',
        'MB' : '48px',
      },
      container: {
        '2xl':'1440px',
      },
      borderRadius: {
        'nav': '72px'
      },
    },
  },
  plugins: [],
}