/** @type {import('tailwindcss').Config} */
 module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        base: {
          light: "#f3f3f3",
          dark: "#030303"
        },
        gray: {
          25: "#fafafa",
          50: "#f5f5f5",
          100: "#efefef",
          200: "#dddddd",
          300: "#c3c4c3",
          400: "#b0b1b1",
          500: "#878888",
          600: "#6c6d6d",
          700: "#404141",
          800: "#222222",
          900: "#121313"
        },
        emerald: {
          25: "#edfaf5",
          50: "#dcfbf3",
          100: "#b9ffee",
          200: "#9bffe6",
          300: "#7affdf",
          400: "#5effd7",
          500: "#48e8c0",
          600: "#3ab597",
          700: "#318570",
          800: "#246354",
          900: "#1a473c"
        },
        indigo: {
          25: "#E1E8FF",
          50: "#B7C7FF",
          100: "#87A1FF",
          200: "#6384FF",
          300: "#3e67ff",
          400: "#194aff",
          500: "#153dd1",
          600: "#102fa3",
          700: "#0c2275",
          800: "#111b40",
          900: "#131621"
        },
        purple: {
          25: "#F8F5FF",
          50: "#E0D5FF",
          100: "#C9B5FF",
          200: "#B196FF",
          300: "#9A76FF",
          400: "#8256FF",
          500: "#6B47D1",
          600: "#5337A3",
          700: "#3C2875",
          800: "#241847",
          900: "#0D091A"
        },
        red: {
          25: "#FFEEE8",
          50: "#FFD3C6",
          100: "#FFB9A3",
          200: "#ff9f81",
          300: "#FF855E",
          400: "#FF6A3C",
          500: "#ff5019",
          600: "#D14215",
          700: "#A33310",
          800: "#75250C",
          900: "#471607"
        },
        orange: {
          25: "#FFF7E8",
          50: "#FFECC6",
          100: "#FFE0A3",
          200: "#FFD481",
          300: "#FFC85E",
          400: "#FFBD3C",
          500: "#FFB119",
          600: "#D19115",
          700: "#A37110",
          800: "#75510C",
          900: "#473207"
        },
        green: {
          25: "#E8F8EF",
          50: "#C6EED8",
          100: "#A3E3C1",
          200: "#81D9A9",
          300: "#5ECF92",
          400: "#3CC47A",
          500: "#19BA63",
          600: "#159951",
          700: "#10773F",
          800: "#0C562E",
          900: "#07341C"
        },
        blue: {
          25: "#E8F4FF",
          50: "#C6E4FF",
          100: "#A4D3FF",
          200: "#82C3FF",
          300: "#60B3FF",
          400: "#3EA2FF",
          500: "#1C92FF",
          600: "#1778D1",
          700: "#125DA3",
          800: "#0D4375",
          900: "#082947"
        },
        action: {
          error: {
            25: "#FFEEE8",
            50: "#FFD3C6",
            100: "#FFB9A3",
            200: "#ff9f81",
            300: "#FF855E",
            400: "#FF6A3C",
            500: "#ff5019",
            600: "#D14215",
            700: "#A33310",
            800: "#75250C",
            900: "#471607"
          },
          success: {
            25: "#E8F8EF",
            50: "#C6EED8",
            100: "#A3E3C1",
            200: "#81D9A9",
            300: "#5ECF92",
            400: "#3CC47A",
            500: "#19BA63",
            600: "#159951",
            700: "#10773F",
            800: "#0C562E",
            900: "#07341C"
          },
          warning: {
            25: "#FFF7E8",
            50: "#FFECC6",
            100: "#FFE0A3",
            200: "#FFD481",
            300: "#FFC85E",
            400: "#FFBD3C",
            500: "#FFB119",
            600: "#D19115",
            700: "#A37110",
            800: "#75510C",
            900: "#473207"
          },
          info: {
            25: "#E8F4FF",
            50: "#C6E4FF",
            100: "#A4D3FF",
            200: "#82C3FF",
            300: "#60B3FF",
            400: "#3EA2FF",
            500: "#1C92FF",
            600: "#1778D1",
            700: "#125DA3",
            800: "#0D4375",
            900: "#082947"
          }
        },
        primary: {
          25: "#edfaf5",
          50: "#dcfbf3",
          100: "#b9ffee",
          200: "#9bffe6",
          300: "#7affdf",
          400: "#5effd7",
          500: "#48e8c0",
          600: "#3ab597",
          700: "#318570",
          800: "#246354",
          900: "#1a473c"
        },
        secondary: {
          25: "#F8F5FF",
          50: "#E0D5FF",
          100: "#C9B5FF",
          200: "#B196FF",
          300: "#9A76FF",
          400: "#8256FF",
          500: "#6B47D1",
          600: "#5337A3",
          700: "#3C2875",
          800: "#241847",
          900: "#0D091A"
        },
        accent: {
          25: "#F8F5FF",
          50: "#E0D5FF",
          100: "#C9B5FF",
          200: "#B196FF",
          300: "#9A76FF",
          400: "#8256FF",
          500: "#6B47D1",
          600: "#5337A3",
          700: "#3C2875",
          800: "#241847",
          900: "#0D091A"
        },
        neutral: {
          25: "#fafafa",
          50: "#f5f5f5",
          100: "#efefef",
          200: "#dddddd",
          300: "#c3c4c3",
          400: "#b0b1b1",
          500: "#878888",
          600: "#6c6d6d",
          700: "#404141",
          800: "#222222",
          900: "#121313"
        }
      },
      fontFamily: {
        DEFAULT: "Inter"
      },
      fontSize: {
        62: 10,
        75: 12,
        87: 14,
        100: 16,
        112: 18,
        125: 20,
        137: 22,
        200: 32,
        225: 36,
        250: 40,
        300: 48,
        350: 56,
        400: 64,
        base: 0.16
      },
      fontWeight: {
        300: "light",
        400: "regular",
        500: "medium",
        600: "semi-bold",
        700: "bold",
        800: "extra-bold",
        900: "black"
      },
      lineHeight: {
        xs: "130%",
    "3xs": "100%",
    "2xs": "110%",
        sm: "140%",
        md: "150%",
        lg: "170%"
      },
      scale: 16,
      letterSpacing: {
        xl: "0.3px",
        sm: "-1.5px",
        md: "0px",
        lg: "0.2px"
      },
      borderRadius: {
        sm: 4,
        md: 6,
        lg: 8
      },
      borderWidth: {
        DEFAULT: 1
      },
      spacing: {
        12: 2,
        25: 4,
        50: 8,
        100: 16,
        125: 20,
        150: 24,
        200: 32,
        250: 40,
        300: 48,
        400: 64,
        500: 80,
        600: 96,
        base: 0.16
      },
      screens: {
        xs: "360px",
        xl: "1600px",
        sm: "600px",
        md: "1024px",
        lg: "1300px"
      },
      typography: {
        heading: {
          1: {
            fontFamily: "Inter",
            fontWeight: "semi-bold",
            lineHeight: "110%",
            fontSize: 64,
            letterSpacing: "0px"
          },
          2: {
            fontFamily: "Inter",
            fontWeight: "semi-bold",
            lineHeight: "110%",
            fontSize: 56,
            letterSpacing: "-1.5px"
          },
          3: {
            fontFamily: "Inter",
            fontWeight: "semi-bold",
            lineHeight: "110%",
            fontSize: 48,
            letterSpacing: "-1.5px"
          },
          4: {
            fontFamily: "Inter",
            fontWeight: "semi-bold",
            lineHeight: "110%",
            fontSize: 40,
            letterSpacing: "-1.5px"
          },
          5: {
            fontFamily: "Inter",
            fontWeight: "semi-bold",
            lineHeight: "130%",
            fontSize: 36,
            letterSpacing: "-1.5px"
          },
          6: {
            fontFamily: "Inter",
            fontWeight: "semi-bold",
            lineHeight: "130%",
            fontSize: 32,
            letterSpacing: "0px"
          },
          7: {
            fontFamily: "Inter",
            fontWeight: "semi-bold",
            lineHeight: "130%",
            fontSize: 22,
            letterSpacing: "0px"
          }
        },
        subtitle: {
          1: {
            fontFamily: "Inter",
            fontWeight: "bold",
            lineHeight: "130%",
            fontSize: 32,
            letterSpacing: "0px"
          },
          2: {
            fontFamily: "Inter",
            fontWeight: "semi-bold",
            lineHeight: "130%",
            fontSize: 32,
            letterSpacing: "0px"
          },
          3: {
            fontFamily: "Inter",
            fontWeight: "regular",
            lineHeight: "130%",
            fontSize: 32,
            letterSpacing: "0px"
          },
          4: {
            fontFamily: "Inter",
            fontWeight: "bold",
            lineHeight: "130%",
            fontSize: 22,
            letterSpacing: "0px"
          },
          5: {
            fontFamily: "Inter",
            fontWeight: "semi-bold",
            lineHeight: "130%",
            fontSize: 22,
            letterSpacing: "0px"
          },
          6: {
            fontFamily: "Inter",
            fontWeight: "bold",
            lineHeight: "130%",
            fontSize: 22,
            letterSpacing: "0px"
          },
          7: {
            fontFamily: "Inter",
            fontWeight: "bold",
            lineHeight: "150%",
            fontSize: 20,
            letterSpacing: "0px"
          },
          8: {
            fontFamily: "Inter",
            fontWeight: "semi-bold",
            lineHeight: "150%",
            fontSize: 20,
            letterSpacing: "0px"
          },
          9: {
            fontFamily: "Inter",
            fontWeight: "regular",
            lineHeight: "150%",
            fontSize: 20,
            letterSpacing: "0px"
          },
          10: {
            fontFamily: "Inter",
            fontWeight: "bold",
            lineHeight: "140%",
            fontSize: 18,
            letterSpacing: "0px"
          },
          11: {
            fontFamily: "Inter",
            fontWeight: "semi-bold",
            lineHeight: "140%",
            fontSize: 18,
            letterSpacing: "0px"
          },
          12: {
            fontFamily: "Inter",
            fontWeight: "regular",
            lineHeight: "140%",
            fontSize: 18,
            letterSpacing: "0px"
          }
        },
        description: {
          1: {
            fontFamily: "Inter",
            fontWeight: "bold",
            lineHeight: "150%",
            fontSize: 22,
            letterSpacing: "0px"
          },
          2: {
            fontFamily: "Inter",
            fontWeight: "semi-bold",
            lineHeight: "150%",
            fontSize: 22,
            letterSpacing: "0px"
          },
          3: {
            fontFamily: "Inter",
            fontWeight: "regular",
            lineHeight: "150%",
            fontSize: 22,
            letterSpacing: "0px"
          },
          4: {
            fontFamily: "Inter",
            fontWeight: "bold",
            lineHeight: "150%",
            fontSize: 20,
            letterSpacing: "0px"
          },
          5: {
            fontFamily: "Inter",
            fontWeight: "semi-bold",
            lineHeight: "150%",
            fontSize: 20,
            letterSpacing: "0px"
          },
          6: {
            fontFamily: "Inter",
            fontWeight: "regular",
            lineHeight: "150%",
            fontSize: 20,
            letterSpacing: "0px"
          },
          7: {
            fontFamily: "Inter",
            fontWeight: "bold",
            lineHeight: "150%",
            fontSize: 18,
            letterSpacing: "0px"
          },
          8: {
            fontFamily: "Inter",
            fontWeight: "semi-bold",
            lineHeight: "150%",
            fontSize: 18,
            letterSpacing: "0px"
          },
          9: {
            fontFamily: "Inter",
            fontWeight: "regular",
            lineHeight: "150%",
            fontSize: 18,
            letterSpacing: "0px"
          }
        },
        body: {
          1: {
            fontFamily: "Inter",
            fontWeight: "bold",
            lineHeight: "150%",
            fontSize: 20,
            letterSpacing: "0px"
          },
          2: {
            fontFamily: "Inter",
            fontWeight: "semi-bold",
            lineHeight: "150%",
            fontSize: 20,
            letterSpacing: "0px"
          },
          3: {
            fontFamily: "Inter",
            fontWeight: "regular",
            lineHeight: "150%",
            fontSize: 20,
            letterSpacing: "0px"
          },
          4: {
            fontFamily: "Inter",
            fontWeight: "bold",
            lineHeight: "140%",
            fontSize: 16,
            letterSpacing: "0px"
          },
          5: {
            fontFamily: "Inter",
            fontWeight: "semi-bold",
            lineHeight: "140%",
            fontSize: 16,
            letterSpacing: "0px"
          },
          6: {
            fontFamily: "Inter",
            fontWeight: "regular",
            lineHeight: "140%",
            fontSize: 16,
            letterSpacing: "0px"
          },
          7: {
            fontFamily: "Inter",
            fontWeight: "bold",
            lineHeight: "140%",
            fontSize: 14,
            letterSpacing: "0px"
          },
          8: {
            fontFamily: "Inter",
            fontWeight: "semi-bold",
            lineHeight: "140%",
            fontSize: 14,
            letterSpacing: "0px"
          },
          9: {
            fontFamily: "Inter",
            fontWeight: "regular",
            lineHeight: "140%",
            fontSize: 14,
            letterSpacing: "0px"
          },
          10: {
            fontFamily: "Inter",
            fontWeight: "regular",
            lineHeight: "140%",
            fontSize: 12,
            letterSpacing: "0px"
          }
        },
        overline: {
          1: {
            fontFamily: "Inter",
            fontWeight: "regular",
            lineHeight: "170%",
            fontSize: 12,
            letterSpacing: "0px"
          },
          2: {
            fontFamily: "Inter",
            fontWeight: "regular",
            lineHeight: "170%",
            fontSize: 10,
            letterSpacing: "0px"
          }
        },
        button: {
          1: {
            fontFamily: "Inter",
            fontWeight: "semi-bold",
            lineHeight: "100%",
            fontSize: 18,
            letterSpacing: "0.3px"
          },
          2: {
            fontFamily: "Inter",
            fontWeight: "semi-bold",
            lineHeight: "100%",
            fontSize: 16,
            letterSpacing: "0.3px"
          },
          3: {
            fontFamily: "Inter",
            fontWeight: "semi-bold",
            lineHeight: "100%",
            fontSize: 14,
            letterSpacing: "0.2px"
          }
        },
        link: {
          1: {
            fontFamily: "Inter",
            fontWeight: "medium",
            lineHeight: "140%",
            fontSize: 16,
            letterSpacing: "0px"
          },
          2: {
            fontFamily: "Inter",
            fontWeight: "medium",
            lineHeight: "140%",
            fontSize: 14,
            letterSpacing: "0px"
          },
          3: {
            fontFamily: "Inter",
            fontWeight: "medium",
            lineHeight: "140%",
            fontSize: 12,
            letterSpacing: "0px"
          }
        },
        tagline: {
          1: {
            fontFamily: "Inter",
            fontWeight: "bold",
            lineHeight: "150%",
            fontSize: 18,
            letterSpacing: "0px"
          },
          2: {
            fontFamily: "Inter",
            fontWeight: "semi-bold",
            lineHeight: "150%",
            fontSize: 18,
            letterSpacing: "0px"
          },
          3: {
            fontFamily: "Inter",
            fontWeight: "medium",
            lineHeight: "150%",
            fontSize: 18,
            letterSpacing: "0px"
          },
          4: {
            fontFamily: "Inter",
            fontWeight: "bold",
            lineHeight: "150%",
            fontSize: 16,
            letterSpacing: "0px"
          },
          5: {
            fontFamily: "Inter",
            fontWeight: "semi-bold",
            lineHeight: "150%",
            fontSize: 16,
            letterSpacing: "0px"
          },
          6: {
            fontFamily: "Inter",
            fontWeight: "medium",
            lineHeight: "150%",
            fontSize: 16,
            letterSpacing: "0px"
          },
          7: {
            fontFamily: "Inter",
            fontWeight: "bold",
            lineHeight: "150%",
            fontSize: 14,
            letterSpacing: "0px"
          },
          8: {
            fontFamily: "Inter",
            fontWeight: "semi-bold",
            lineHeight: "150%",
            fontSize: 14,
            letterSpacing: "0px"
          },
          9: {
            fontFamily: "Inter",
            fontWeight: "medium",
            lineHeight: "150%",
            fontSize: 14,
            letterSpacing: "0px"
          },
          10: {
            fontFamily: "Inter",
            fontWeight: "bold",
            lineHeight: "150%",
            fontSize: 12,
            letterSpacing: "0px"
          },
          11: {
            fontFamily: "Inter",
            fontWeight: "semi-bold",
            lineHeight: "150%",
            fontSize: 12,
            letterSpacing: "0px"
          },
          12: {
            fontFamily: "Inter",
            fontWeight: "medium",
            lineHeight: "150%",
            fontSize: 12,
            letterSpacing: "0px"
          }
        },
        menuNavigation: {
          1: {
            fontFamily: "Inter",
            fontWeight: "regular",
            lineHeight: "150%",
            fontSize: 16,
            letterSpacing: "0px"
          },
          2: {
            fontFamily: "Inter",
            fontWeight: "medium",
            lineHeight: "150%",
            fontSize: 14,
            letterSpacing: "0px"
          },
          3: {
            fontFamily: "Inter",
            fontWeight: "medium",
            lineHeight: "150%",
            fontSize: 12,
            letterSpacing: "0px"
          }
        }
      },
      form: {
        input: {
          border: {
            disabled: {
              color: "#222222",
              width: "1px",
              style: "solid"
            },
            focused: {
              color: "#f3f3f3",
              width: "1px",
              style: "solid"
            },
            error: {
              focused: {
                color: "#FF855E",
                width: "1px",
                style: "solid"
              },
              default: {
                color: "#A33310",
                width: "1px",
                style: "solid"
              }
            },
            default: {
              color: "#404141",
              width: "1px",
              style: "solid"
            }
          }
        },
        search: {
          border: {
            disabled: {
              color: "#222222",
              width: "1px",
              style: "solid"
            },
            focused: {
              color: "#f3f3f3",
              width: "1px",
              style: "solid"
            },
            error: {
              focused: {
                color: "#FF855E",
                width: "1px",
                style: "solid"
              },
              neutral: {
                color: "#A33310",
                width: "1px",
                style: "solid"
              }
            },
            default: {
              color: "#404141",
              width: "1px",
              style: "solid"
            }
          }
        }
      }
    },
  },
 plugins: [require("@tailwindcss/forms"),require("@tailwindcss/typography")]
}