/** @type {import('tailwindcss').Config} */
 module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      ds: {
        core: {
          color: {
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
            }
          },
          font: {
            family: {
              default: "Inter"
            },
            weight: {
              300: "Light",
              400: "Regular",
              500: "Medium",
              600: "Semi Bold",
              700: "Bold",
              800: "ExtraBold",
              900: "Black"
            },
            lineHeight: {
              xxxs: "100%",
              xxs: "110%",
              xs: "130%",
              s: "140%",
              m: "150%",
              l: "170%"
            },
            size: {
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
            }
          },
          scale: 16,
          letterSpacing: {
            s: "-1.5px",
            m: "0px",
            l: "0.2px",
            xl: "0.3px"
          },
          border: {
            radius: {
              s: 4,
              m: 6,
              l: 8
            }
          },
          borderWidth: {
            1: 1
          },
          spacing: {
            12: 2,
            25: 4,
            50: 8,
            75: 12,
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
          breakpoints: {
            xs: "360px",
            s: "600px",
            m: "1024px",
            l: "1300px",
            xl: "1600px"
          }
        },
        semantic: {
          shadow: {
            dropdown: {
              x: "0px",
              y: "4px",
              blur: "20px",
              spread: "0px",
              color: "#10121190",
              type: "dropShadow"
            }
          },
          font: {
            heading: {
              1: {
                fontFamily: "Inter",
                fontWeight: "Semi Bold",
                lineHeight: "110%",
                fontSize: 64,
                letterSpacing: "0px"
              },
              2: {
                fontFamily: "Inter",
                fontWeight: "Semi Bold",
                lineHeight: "110%",
                fontSize: 56,
                letterSpacing: "-1.5px"
              },
              3: {
                fontFamily: "Inter",
                fontWeight: "Semi Bold",
                lineHeight: "110%",
                fontSize: 48,
                letterSpacing: "-1.5px"
              },
              4: {
                fontFamily: "Inter",
                fontWeight: "Semi Bold",
                lineHeight: "110%",
                fontSize: 40,
                letterSpacing: "-1.5px"
              },
              5: {
                fontFamily: "Inter",
                fontWeight: "Semi Bold",
                lineHeight: "130%",
                fontSize: 36,
                letterSpacing: "-1.5px"
              },
              6: {
                fontFamily: "Inter",
                fontWeight: "Semi Bold",
                lineHeight: "130%",
                fontSize: 32,
                letterSpacing: "0px"
              },
              7: {
                fontFamily: "Inter",
                fontWeight: "Semi Bold",
                lineHeight: "130%",
                fontSize: 22,
                letterSpacing: "0px"
              }
            },
            subtitle: {
              1: {
                fontFamily: "Inter",
                fontWeight: "Bold",
                lineHeight: "130%",
                fontSize: 32,
                letterSpacing: "0px"
              },
              2: {
                fontFamily: "Inter",
                fontWeight: "Semi Bold",
                lineHeight: "130%",
                fontSize: 32,
                letterSpacing: "0px"
              },
              3: {
                fontFamily: "Inter",
                fontWeight: "Regular",
                lineHeight: "130%",
                fontSize: 32,
                letterSpacing: "0px"
              },
              4: {
                fontFamily: "Inter",
                fontWeight: "Bold",
                lineHeight: "130%",
                fontSize: 22,
                letterSpacing: "0px"
              },
              5: {
                fontFamily: "Inter",
                fontWeight: "Semi Bold",
                lineHeight: "130%",
                fontSize: 22,
                letterSpacing: "0px"
              },
              6: {
                fontFamily: "Inter",
                fontWeight: "Bold",
                lineHeight: "130%",
                fontSize: 22,
                letterSpacing: "0px"
              },
              7: {
                fontFamily: "Inter",
                fontWeight: "Bold",
                lineHeight: "150%",
                fontSize: 20,
                letterSpacing: "0px"
              },
              8: {
                fontFamily: "Inter",
                fontWeight: "Semi Bold",
                lineHeight: "150%",
                fontSize: 20,
                letterSpacing: "0px"
              },
              9: {
                fontFamily: "Inter",
                fontWeight: "Regular",
                lineHeight: "150%",
                fontSize: 20,
                letterSpacing: "0px"
              },
              10: {
                fontFamily: "Inter",
                fontWeight: "Bold",
                lineHeight: "140%",
                fontSize: 18,
                letterSpacing: "0px"
              },
              11: {
                fontFamily: "Inter",
                fontWeight: "Semi Bold",
                lineHeight: "140%",
                fontSize: 18,
                letterSpacing: "0px"
              },
              12: {
                fontFamily: "Inter",
                fontWeight: "Regular",
                lineHeight: "140%",
                fontSize: 18,
                letterSpacing: "0px"
              }
            },
            description: {
              1: {
                fontFamily: "Inter",
                fontWeight: "Bold",
                lineHeight: "150%",
                fontSize: 22,
                letterSpacing: "0px"
              },
              2: {
                fontFamily: "Inter",
                fontWeight: "Semi Bold",
                lineHeight: "150%",
                fontSize: 22,
                letterSpacing: "0px"
              },
              3: {
                fontFamily: "Inter",
                fontWeight: "Regular",
                lineHeight: "150%",
                fontSize: 22,
                letterSpacing: "0px"
              },
              4: {
                fontFamily: "Inter",
                fontWeight: "Bold",
                lineHeight: "150%",
                fontSize: 20,
                letterSpacing: "0px"
              },
              5: {
                fontFamily: "Inter",
                fontWeight: "Semi Bold",
                lineHeight: "150%",
                fontSize: 20,
                letterSpacing: "0px"
              },
              6: {
                fontFamily: "Inter",
                fontWeight: "Regular",
                lineHeight: "150%",
                fontSize: 20,
                letterSpacing: "0px"
              },
              7: {
                fontFamily: "Inter",
                fontWeight: "Bold",
                lineHeight: "150%",
                fontSize: 18,
                letterSpacing: "0px"
              },
              8: {
                fontFamily: "Inter",
                fontWeight: "Semi Bold",
                lineHeight: "150%",
                fontSize: 18,
                letterSpacing: "0px"
              },
              9: {
                fontFamily: "Inter",
                fontWeight: "Regular",
                lineHeight: "150%",
                fontSize: 18,
                letterSpacing: "0px"
              }
            },
            body: {
              1: {
                fontFamily: "Inter",
                fontWeight: "Bold",
                lineHeight: "150%",
                fontSize: 20,
                letterSpacing: "0px"
              },
              2: {
                fontFamily: "Inter",
                fontWeight: "Semi Bold",
                lineHeight: "150%",
                fontSize: 20,
                letterSpacing: "0px"
              },
              3: {
                fontFamily: "Inter",
                fontWeight: "Regular",
                lineHeight: "150%",
                fontSize: 20,
                letterSpacing: "0px"
              },
              4: {
                fontFamily: "Inter",
                fontWeight: "Bold",
                lineHeight: "140%",
                fontSize: 16,
                letterSpacing: "0px"
              },
              5: {
                fontFamily: "Inter",
                fontWeight: "Semi Bold",
                lineHeight: "140%",
                fontSize: 16,
                letterSpacing: "0px"
              },
              6: {
                fontFamily: "Inter",
                fontWeight: "Regular",
                lineHeight: "140%",
                fontSize: 16,
                letterSpacing: "0px"
              },
              7: {
                fontFamily: "Inter",
                fontWeight: "Bold",
                lineHeight: "140%",
                fontSize: 14,
                letterSpacing: "0px"
              },
              8: {
                fontFamily: "Inter",
                fontWeight: "Semi Bold",
                lineHeight: "140%",
                fontSize: 14,
                letterSpacing: "0px"
              },
              9: {
                fontFamily: "Inter",
                fontWeight: "Regular",
                lineHeight: "140%",
                fontSize: 14,
                letterSpacing: "0px"
              },
              10: {
                fontFamily: "Inter",
                fontWeight: "Regular",
                lineHeight: "140%",
                fontSize: 12,
                letterSpacing: "0px"
              }
            },
            overline: {
              1: {
                fontFamily: "Inter",
                fontWeight: "Regular",
                lineHeight: "170%",
                fontSize: 12,
                letterSpacing: "0px"
              },
              2: {
                fontFamily: "Inter",
                fontWeight: "Regular",
                lineHeight: "170%",
                fontSize: 10,
                letterSpacing: "0px"
              }
            },
            button: {
              1: {
                fontFamily: "Inter",
                fontWeight: "Semi Bold",
                lineHeight: "100%",
                fontSize: 18,
                letterSpacing: "0.3px"
              },
              2: {
                fontFamily: "Inter",
                fontWeight: "Semi Bold",
                lineHeight: "100%",
                fontSize: 16,
                letterSpacing: "0.3px"
              },
              3: {
                fontFamily: "Inter",
                fontWeight: "Semi Bold",
                lineHeight: "100%",
                fontSize: 14,
                letterSpacing: "0.2px"
              }
            },
            link: {
              1: {
                fontFamily: "Inter",
                fontWeight: "Medium",
                lineHeight: "140%",
                fontSize: 16,
                letterSpacing: "0px"
              },
              2: {
                fontFamily: "Inter",
                fontWeight: "Medium",
                lineHeight: "140%",
                fontSize: 14,
                letterSpacing: "0px"
              },
              3: {
                fontFamily: "Inter",
                fontWeight: "Medium",
                lineHeight: "140%",
                fontSize: 12,
                letterSpacing: "0px"
              }
            },
            tagline: {
              1: {
                fontFamily: "Inter",
                fontWeight: "Bold",
                lineHeight: "150%",
                fontSize: 18,
                letterSpacing: "0px"
              },
              2: {
                fontFamily: "Inter",
                fontWeight: "Semi Bold",
                lineHeight: "150%",
                fontSize: 18,
                letterSpacing: "0px"
              },
              3: {
                fontFamily: "Inter",
                fontWeight: "Medium",
                lineHeight: "150%",
                fontSize: 18,
                letterSpacing: "0px"
              },
              4: {
                fontFamily: "Inter",
                fontWeight: "Bold",
                lineHeight: "150%",
                fontSize: 16,
                letterSpacing: "0px"
              },
              5: {
                fontFamily: "Inter",
                fontWeight: "Semi Bold",
                lineHeight: "150%",
                fontSize: 16,
                letterSpacing: "0px"
              },
              6: {
                fontFamily: "Inter",
                fontWeight: "Medium",
                lineHeight: "150%",
                fontSize: 16,
                letterSpacing: "0px"
              },
              7: {
                fontFamily: "Inter",
                fontWeight: "Bold",
                lineHeight: "150%",
                fontSize: 14,
                letterSpacing: "0px"
              },
              8: {
                fontFamily: "Inter",
                fontWeight: "Semi Bold",
                lineHeight: "150%",
                fontSize: 14,
                letterSpacing: "0px"
              },
              9: {
                fontFamily: "Inter",
                fontWeight: "Medium",
                lineHeight: "150%",
                fontSize: 14,
                letterSpacing: "0px",
                textCase: "Uppercase"
              },
              10: {
                fontFamily: "Inter",
                fontWeight: "Bold",
                lineHeight: "150%",
                fontSize: 12,
                letterSpacing: "0px"
              },
              11: {
                fontFamily: "Inter",
                fontWeight: "Semi Bold",
                lineHeight: "150%",
                fontSize: 12,
                letterSpacing: "0px"
              },
              12: {
                fontFamily: "Inter",
                fontWeight: "Medium",
                lineHeight: "150%",
                fontSize: 12,
                letterSpacing: "0px",
                textCase: "Uppercase"
              }
            },
            menuNavigation: {
              1: {
                fontFamily: "Inter",
                fontWeight: "Regular",
                lineHeight: "150%",
                fontSize: 16,
                letterSpacing: "0px"
              },
              2: {
                fontFamily: "Inter",
                fontWeight: "Medium",
                lineHeight: "150%",
                fontSize: 14,
                letterSpacing: "0px"
              },
              3: {
                fontFamily: "Inter",
                fontWeight: "Medium",
                lineHeight: "150%",
                fontSize: 12,
                letterSpacing: "0px"
              }
            }
          },
          input: {
            border: {
              disabled: {
                color: "#222222",
                width: "1px",
                style: "solid"
              },
              default: {
                color: "#404141",
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
              }
            }
          },
          color: {
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
            text: {
              default: "#878888",
              error: "#ff5019",
              warning: "#FFB119",
              success: "#19BA63"
            },
            border: {
              default: "#404141",
              focused: "#f3f3f3",
              disabled: "#222222"
            },
            background: {
              default: "#030303",
              focused: "#121313"
            },
            gradient: {
              general: {
                1: "linear-gradient (45deg, #030303 0%, #252726 100%)",
                2: "linear-gradient (45deg, #7CE3CB 0%, #7963B2 100%)",
                3: "linear-gradient (45deg, #C3C4C3 0%, #F3F3F3 100%)",
                4: "linear-gradient (135deg, #f3f3f340 0%, #20202099 100%)"
              },
              green: {
                1: "linear-gradient (135deg, #f3f3f3 0%, #4BC79A 100%)",
                2: "linear-gradient (135deg, #5EFFD7 0%, #5effd700 100%)"
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
              default: {
                color: "#404141",
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
              }
            }
          }
        },
        component: {
          button: {
            primary: {
              default: {
                fill: "#C6E4FF",
                borderRadius: 8,
                typography: {
                  fontFamily: "Inter",
                  fontWeight: "Semi Bold",
                  lineHeight: "100%",
                  fontSize: 18,
                  letterSpacing: "0.3px"
                }
              }
            }
          },
          input: {
            default: {
              border: {
                color: "#404141",
                width: "1px",
                style: "solid"
              },
              typography: {
                fontFamily: "Inter",
                fontWeight: "Regular",
                lineHeight: "140%",
                fontSize: 14,
                letterSpacing: "0px"
              },
              fill: "#030303",
              verticalPadding: 8,
              horizontalPadding: 12
            }
          }
        }
      },
      tokenSetOrder: {
        0: "global"
      },
      global: {
        ds: {
          core: {
            color: {
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
              }
            },
            font: {
              family: {
                default: "Inter"
              },
              weight: {
                300: "Light",
                400: "Regular",
                500: "Medium",
                600: "Semi Bold",
                700: "Bold",
                800: "ExtraBold",
                900: "Black"
              },
              lineHeight: {
                xxxs: "100%",
                xxs: "110%",
                xs: "130%",
                s: "140%",
                m: "150%",
                l: "170%"
              },
              size: {
                62: "0.16 *62.5",
                75: "0.16 *75",
                87: "0.16 *87.5",
                100: "0.16*100",
                112: "0.16 *112.5",
                125: "0.16 *125",
                137: "0.16 *137.5",
                200: "0.16 *200",
                225: "0.16 *225",
                250: "0.16 *250",
                300: "0.16 *300",
                350: "0.16 *350",
                400: "0.16 *400",
                base: "16 /100"
              }
            },
            scale: "16",
            letterSpacing: {
              s: "-1.5px",
              m: "0px",
              l: "0.2px",
              xl: "0.3px"
            },
            border: {
              radius: {
                s: "4",
                m: "6",
                l: "8"
              }
            },
            borderWidth: {
              1: "1"
            },
            spacing: {
              12: "0.16 *12.5",
              25: "0.16 *25",
              50: "0.16 *50",
              75: "0.16*75",
              100: "0.16 *100",
              125: "0.16 *125",
              150: "0.16 *150",
              200: "0.16 *200",
              250: "0.16 *250",
              300: "0.16 *300",
              400: "0.16 *400",
              500: "0.16 *500",
              600: "0.16 *600",
              base: "16/100"
            },
            breakpoints: {
              xs: "360px",
              s: "600px",
              m: "1024px",
              l: "1300px",
              xl: "1600px"
            }
          },
          semantic: {
            shadow: {
              dropdown: {
                x: "0px",
                y: "4px",
                blur: "20px",
                spread: "0px",
                color: "#10121190",
                type: "dropShadow"
              }
            },
            font: {
              heading: {
                1: {
                  fontFamily: "Inter",
                  fontWeight: "Semi Bold",
                  lineHeight: "110%",
                  fontSize: 64,
                  letterSpacing: "0px"
                },
                2: {
                  fontFamily: "Inter",
                  fontWeight: "Semi Bold",
                  lineHeight: "110%",
                  fontSize: 56,
                  letterSpacing: "-1.5px"
                },
                3: {
                  fontFamily: "Inter",
                  fontWeight: "Semi Bold",
                  lineHeight: "110%",
                  fontSize: 48,
                  letterSpacing: "-1.5px"
                },
                4: {
                  fontFamily: "Inter",
                  fontWeight: "Semi Bold",
                  lineHeight: "110%",
                  fontSize: 40,
                  letterSpacing: "-1.5px"
                },
                5: {
                  fontFamily: "Inter",
                  fontWeight: "Semi Bold",
                  lineHeight: "130%",
                  fontSize: 36,
                  letterSpacing: "-1.5px"
                },
                6: {
                  fontFamily: "Inter",
                  fontWeight: "Semi Bold",
                  lineHeight: "130%",
                  fontSize: 32,
                  letterSpacing: "0px"
                },
                7: {
                  fontFamily: "Inter",
                  fontWeight: "Semi Bold",
                  lineHeight: "130%",
                  fontSize: 22,
                  letterSpacing: "0px"
                }
              },
              subtitle: {
                1: {
                  fontFamily: "Inter",
                  fontWeight: "Bold",
                  lineHeight: "130%",
                  fontSize: 32,
                  letterSpacing: "0px"
                },
                2: {
                  fontFamily: "Inter",
                  fontWeight: "Semi Bold",
                  lineHeight: "130%",
                  fontSize: 32,
                  letterSpacing: "0px"
                },
                3: {
                  fontFamily: "Inter",
                  fontWeight: "Regular",
                  lineHeight: "130%",
                  fontSize: 32,
                  letterSpacing: "0px"
                },
                4: {
                  fontFamily: "Inter",
                  fontWeight: "Bold",
                  lineHeight: "130%",
                  fontSize: 22,
                  letterSpacing: "0px"
                },
                5: {
                  fontFamily: "Inter",
                  fontWeight: "Semi Bold",
                  lineHeight: "130%",
                  fontSize: 22,
                  letterSpacing: "0px"
                },
                6: {
                  fontFamily: "Inter",
                  fontWeight: "Bold",
                  lineHeight: "130%",
                  fontSize: 22,
                  letterSpacing: "0px"
                },
                7: {
                  fontFamily: "Inter",
                  fontWeight: "Bold",
                  lineHeight: "150%",
                  fontSize: 20,
                  letterSpacing: "0px"
                },
                8: {
                  fontFamily: "Inter",
                  fontWeight: "Semi Bold",
                  lineHeight: "150%",
                  fontSize: 20,
                  letterSpacing: "0px"
                },
                9: {
                  fontFamily: "Inter",
                  fontWeight: "Regular",
                  lineHeight: "150%",
                  fontSize: 20,
                  letterSpacing: "0px"
                },
                10: {
                  fontFamily: "Inter",
                  fontWeight: "Bold",
                  lineHeight: "140%",
                  fontSize: 18,
                  letterSpacing: "0px"
                },
                11: {
                  fontFamily: "Inter",
                  fontWeight: "Semi Bold",
                  lineHeight: "140%",
                  fontSize: 18,
                  letterSpacing: "0px"
                },
                12: {
                  fontFamily: "Inter",
                  fontWeight: "Regular",
                  lineHeight: "140%",
                  fontSize: 18,
                  letterSpacing: "0px"
                }
              },
              description: {
                1: {
                  fontFamily: "Inter",
                  fontWeight: "Bold",
                  lineHeight: "150%",
                  fontSize: 22,
                  letterSpacing: "0px"
                },
                2: {
                  fontFamily: "Inter",
                  fontWeight: "Semi Bold",
                  lineHeight: "150%",
                  fontSize: 22,
                  letterSpacing: "0px"
                },
                3: {
                  fontFamily: "Inter",
                  fontWeight: "Regular",
                  lineHeight: "150%",
                  fontSize: 22,
                  letterSpacing: "0px"
                },
                4: {
                  fontFamily: "Inter",
                  fontWeight: "Bold",
                  lineHeight: "150%",
                  fontSize: 20,
                  letterSpacing: "0px"
                },
                5: {
                  fontFamily: "Inter",
                  fontWeight: "Semi Bold",
                  lineHeight: "150%",
                  fontSize: 20,
                  letterSpacing: "0px"
                },
                6: {
                  fontFamily: "Inter",
                  fontWeight: "Regular",
                  lineHeight: "150%",
                  fontSize: 20,
                  letterSpacing: "0px"
                },
                7: {
                  fontFamily: "Inter",
                  fontWeight: "Bold",
                  lineHeight: "150%",
                  fontSize: 18,
                  letterSpacing: "0px"
                },
                8: {
                  fontFamily: "Inter",
                  fontWeight: "Semi Bold",
                  lineHeight: "150%",
                  fontSize: 18,
                  letterSpacing: "0px"
                },
                9: {
                  fontFamily: "Inter",
                  fontWeight: "Regular",
                  lineHeight: "150%",
                  fontSize: 18,
                  letterSpacing: "0px"
                }
              },
              body: {
                1: {
                  fontFamily: "Inter",
                  fontWeight: "Bold",
                  lineHeight: "150%",
                  fontSize: 20,
                  letterSpacing: "0px"
                },
                2: {
                  fontFamily: "Inter",
                  fontWeight: "Semi Bold",
                  lineHeight: "150%",
                  fontSize: 20,
                  letterSpacing: "0px"
                },
                3: {
                  fontFamily: "Inter",
                  fontWeight: "Regular",
                  lineHeight: "150%",
                  fontSize: 20,
                  letterSpacing: "0px"
                },
                4: {
                  fontFamily: "Inter",
                  fontWeight: "Bold",
                  lineHeight: "140%",
                  fontSize: 16,
                  letterSpacing: "0px"
                },
                5: {
                  fontFamily: "Inter",
                  fontWeight: "Semi Bold",
                  lineHeight: "140%",
                  fontSize: 16,
                  letterSpacing: "0px"
                },
                6: {
                  fontFamily: "Inter",
                  fontWeight: "Regular",
                  lineHeight: "140%",
                  fontSize: 16,
                  letterSpacing: "0px"
                },
                7: {
                  fontFamily: "Inter",
                  fontWeight: "Bold",
                  lineHeight: "140%",
                  fontSize: 14,
                  letterSpacing: "0px"
                },
                8: {
                  fontFamily: "Inter",
                  fontWeight: "Semi Bold",
                  lineHeight: "140%",
                  fontSize: 14,
                  letterSpacing: "0px"
                },
                9: {
                  fontFamily: "Inter",
                  fontWeight: "Regular",
                  lineHeight: "140%",
                  fontSize: 14,
                  letterSpacing: "0px"
                },
                10: {
                  fontFamily: "Inter",
                  fontWeight: "Regular",
                  lineHeight: "140%",
                  fontSize: 12,
                  letterSpacing: "0px"
                }
              },
              overline: {
                1: {
                  fontFamily: "Inter",
                  fontWeight: "Regular",
                  lineHeight: "170%",
                  fontSize: 12,
                  letterSpacing: "0px"
                },
                2: {
                  fontFamily: "Inter",
                  fontWeight: "Regular",
                  lineHeight: "170%",
                  fontSize: 10,
                  letterSpacing: "0px"
                }
              },
              button: {
                1: {
                  fontFamily: "Inter",
                  fontWeight: "Semi Bold",
                  lineHeight: "100%",
                  fontSize: 18,
                  letterSpacing: "0.3px"
                },
                2: {
                  fontFamily: "Inter",
                  fontWeight: "Semi Bold",
                  lineHeight: "100%",
                  fontSize: 16,
                  letterSpacing: "0.3px"
                },
                3: {
                  fontFamily: "Inter",
                  fontWeight: "Semi Bold",
                  lineHeight: "100%",
                  fontSize: 14,
                  letterSpacing: "0.2px"
                }
              },
              link: {
                1: {
                  fontFamily: "Inter",
                  fontWeight: "Medium",
                  lineHeight: "140%",
                  fontSize: 16,
                  letterSpacing: "0px"
                },
                2: {
                  fontFamily: "Inter",
                  fontWeight: "Medium",
                  lineHeight: "140%",
                  fontSize: 14,
                  letterSpacing: "0px"
                },
                3: {
                  fontFamily: "Inter",
                  fontWeight: "Medium",
                  lineHeight: "140%",
                  fontSize: 12,
                  letterSpacing: "0px"
                }
              },
              tagline: {
                1: {
                  fontFamily: "Inter",
                  fontWeight: "Bold",
                  lineHeight: "150%",
                  fontSize: 18,
                  letterSpacing: "0px"
                },
                2: {
                  fontFamily: "Inter",
                  fontWeight: "Semi Bold",
                  lineHeight: "150%",
                  fontSize: 18,
                  letterSpacing: "0px"
                },
                3: {
                  fontFamily: "Inter",
                  fontWeight: "Medium",
                  lineHeight: "150%",
                  fontSize: 18,
                  letterSpacing: "0px"
                },
                4: {
                  fontFamily: "Inter",
                  fontWeight: "Bold",
                  lineHeight: "150%",
                  fontSize: 16,
                  letterSpacing: "0px"
                },
                5: {
                  fontFamily: "Inter",
                  fontWeight: "Semi Bold",
                  lineHeight: "150%",
                  fontSize: 16,
                  letterSpacing: "0px"
                },
                6: {
                  fontFamily: "Inter",
                  fontWeight: "Medium",
                  lineHeight: "150%",
                  fontSize: 16,
                  letterSpacing: "0px"
                },
                7: {
                  fontFamily: "Inter",
                  fontWeight: "Bold",
                  lineHeight: "150%",
                  fontSize: 14,
                  letterSpacing: "0px"
                },
                8: {
                  fontFamily: "Inter",
                  fontWeight: "Semi Bold",
                  lineHeight: "150%",
                  fontSize: 14,
                  letterSpacing: "0px"
                },
                9: {
                  fontFamily: "Inter",
                  fontWeight: "Medium",
                  lineHeight: "150%",
                  fontSize: 14,
                  letterSpacing: "0px",
                  textCase: "Uppercase"
                },
                10: {
                  fontFamily: "Inter",
                  fontWeight: "Bold",
                  lineHeight: "150%",
                  fontSize: 12,
                  letterSpacing: "0px"
                },
                11: {
                  fontFamily: "Inter",
                  fontWeight: "Semi Bold",
                  lineHeight: "150%",
                  fontSize: 12,
                  letterSpacing: "0px"
                },
                12: {
                  fontFamily: "Inter",
                  fontWeight: "Medium",
                  lineHeight: "150%",
                  fontSize: 12,
                  letterSpacing: "0px",
                  textCase: "Uppercase"
                }
              },
              menuNavigation: {
                1: {
                  fontFamily: "Inter",
                  fontWeight: "Regular",
                  lineHeight: "150%",
                  fontSize: 16,
                  letterSpacing: "0px"
                },
                2: {
                  fontFamily: "Inter",
                  fontWeight: "Medium",
                  lineHeight: "150%",
                  fontSize: 14,
                  letterSpacing: "0px"
                },
                3: {
                  fontFamily: "Inter",
                  fontWeight: "Medium",
                  lineHeight: "150%",
                  fontSize: 12,
                  letterSpacing: "0px"
                }
              }
            },
            input: {
              border: {
                disabled: {
                  color: "#222222",
                  width: "1px",
                  style: "solid"
                },
                default: {
                  color: "#404141",
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
                }
              }
            },
            color: {
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
              text: {
                default: "#878888",
                error: "#ff5019",
                warning: "#FFB119",
                success: "#19BA63"
              },
              border: {
                default: "#404141",
                focused: "#f3f3f3",
                disabled: "#222222"
              },
              background: {
                default: "#030303",
                focused: "#121313"
              },
              gradient: {
                general: {
                  1: "linear-gradient (45deg, #030303 0%, #252726 100%)",
                  2: "linear-gradient (45deg, #7CE3CB 0%, #7963B2 100%)",
                  3: "linear-gradient (45deg, #C3C4C3 0%, #F3F3F3 100%)",
                  4: "linear-gradient (135deg, rgba(#F3F3F3, .25) 0%, rgba(#202020, .60) 100%)"
                },
                green: {
                  1: "linear-gradient (135deg, #f3f3f3 0%, #4BC79A 100%)",
                  2: "linear-gradient (135deg, #5EFFD7 0%, rgb(#5EFFD7, 0) 100%)"
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
                default: {
                  color: "#404141",
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
                }
              }
            }
          },
          component: {
            button: {
              primary: {
                default: {
                  fill: "#C6E4FF",
                  borderRadius: 8,
                  typography: {
                    fontFamily: {
                      $value: "Inter",
                      $type: "fontFamily",
                      value: "Inter",
                      type: "fontFamilies",
                      filePath: "tokens/converted-tokens.json",
                      isSource: true,
                      original: {
                        $value: "Inter",
                        $type: "fontFamily",
                        value: "Inter",
                        type: "fontFamilies"
                      },
                      name: "ds-semantic-font-button-1-font-family",
                      attributes: {
                        category: "ds",
                        type: "semantic",
                        item: "font",
                        subitem: "button",
                        state: "1"
                      },
                      path: [
                    "ds",
                    "semantic",
                    "font",
                    "button",
                    "1",
                    "fontFamily"
                  ]
                    },
                    fontWeight: {
                      $value: "Semi Bold",
                      $type: "fontWeight",
                      value: "Semi Bold",
                      type: "fontWeights",
                      filePath: "tokens/converted-tokens.json",
                      isSource: true,
                      original: {
                        $value: "Semi Bold",
                        $type: "fontWeight",
                        value: "Semi Bold",
                        type: "fontWeights"
                      },
                      name: "ds-semantic-font-button-1-font-weight",
                      attributes: {
                        category: "ds",
                        type: "semantic",
                        item: "font",
                        subitem: "button",
                        state: "1"
                      },
                      path: [
                    "ds",
                    "semantic",
                    "font",
                    "button",
                    "1",
                    "fontWeight"
                  ]
                    },
                    lineHeight: {
                      $value: "100%",
                      $type: "lineHeight",
                      value: "100%",
                      type: "lineHeights",
                      filePath: "tokens/converted-tokens.json",
                      isSource: true,
                      original: {
                        $value: "100%",
                        $type: "lineHeight",
                        value: "100%",
                        type: "lineHeights"
                      },
                      name: "ds-semantic-font-button-1-line-height",
                      attributes: {
                        category: "ds",
                        type: "semantic",
                        item: "font",
                        subitem: "button",
                        state: "1"
                      },
                      path: [
                    "ds",
                    "semantic",
                    "font",
                    "button",
                    "1",
                    "lineHeight"
                  ]
                    },
                    fontSize: {
                      $value: 18,
                      $type: "fontSize",
                      value: 18,
                      type: "fontSizes",
                      filePath: "tokens/converted-tokens.json",
                      isSource: true,
                      original: {
                        $value: 18,
                        $type: "fontSize",
                        value: 18,
                        type: "fontSizes"
                      },
                      name: "ds-semantic-font-button-1-font-size",
                      attributes: {
                        category: "ds",
                        type: "semantic",
                        item: "font",
                        subitem: "button",
                        state: "1"
                      },
                      path: [
                    "ds",
                    "semantic",
                    "font",
                    "button",
                    "1",
                    "fontSize"
                  ]
                    },
                    letterSpacing: {
                      $value: "0.3px",
                      $type: "letterSpacing",
                      value: "0.3px",
                      type: "letterSpacing",
                      filePath: "tokens/converted-tokens.json",
                      isSource: true,
                      original: {
                        $value: "0.3px",
                        $type: "letterSpacing",
                        value: "0.3px",
                        type: "letterSpacing"
                      },
                      name: "ds-semantic-font-button-1-letter-spacing",
                      attributes: {
                        category: "ds",
                        type: "semantic",
                        item: "font",
                        subitem: "button",
                        state: "1"
                      },
                      path: [
                    "ds",
                    "semantic",
                    "font",
                    "button",
                    "1",
                    "letterSpacing"
                  ]
                    }
                  }
                }
              }
            },
            input: {
              default: {
                border: {
                  color: {
                    $value: "#404141",
                    $type: "color",
                    value: "#404141",
                    type: "color",
                    filePath: "tokens/converted-tokens.json",
                    isSource: true,
                    original: {
                      $value: "#404141",
                      $type: "color",
                      value: "#404141",
                      type: "color"
                    },
                    name: "ds-semantic-input-border-default-color",
                    attributes: {
                      category: "ds",
                      type: "semantic",
                      item: "input",
                      subitem: "border",
                      state: "default"
                    },
                    path: [
                  "ds",
                  "semantic",
                  "input",
                  "border",
                  "default",
                  "color"
                ]
                  },
                  width: {
                    $value: "1px",
                    $type: "dimension",
                    value: "1px",
                    type: "dimension",
                    filePath: "tokens/converted-tokens.json",
                    isSource: true,
                    original: {
                      $value: "1px",
                      $type: "dimension",
                      value: "1px",
                      type: "dimension"
                    },
                    name: "ds-semantic-input-border-default-width",
                    attributes: {
                      category: "ds",
                      type: "semantic",
                      item: "input",
                      subitem: "border",
                      state: "default"
                    },
                    path: [
                  "ds",
                  "semantic",
                  "input",
                  "border",
                  "default",
                  "width"
                ]
                  },
                  style: {
                    $value: "solid",
                    $type: "strokeStyle",
                    value: "solid",
                    type: "strokeStyle",
                    filePath: "tokens/converted-tokens.json",
                    isSource: true,
                    original: {
                      $value: "solid",
                      $type: "strokeStyle",
                      value: "solid",
                      type: "strokeStyle"
                    },
                    name: "ds-semantic-input-border-default-style",
                    attributes: {
                      category: "ds",
                      type: "semantic",
                      item: "input",
                      subitem: "border",
                      state: "default"
                    },
                    path: [
                  "ds",
                  "semantic",
                  "input",
                  "border",
                  "default",
                  "style"
                ]
                  }
                },
                typography: {
                  fontFamily: {
                    $value: "Inter",
                    $type: "fontFamily",
                    value: "Inter",
                    type: "fontFamilies",
                    filePath: "tokens/converted-tokens.json",
                    isSource: true,
                    original: {
                      $value: "Inter",
                      $type: "fontFamily",
                      value: "Inter",
                      type: "fontFamilies"
                    },
                    name: "ds-semantic-font-body-9-font-family",
                    attributes: {
                      category: "ds",
                      type: "semantic",
                      item: "font",
                      subitem: "body",
                      state: "9"
                    },
                    path: [
                  "ds",
                  "semantic",
                  "font",
                  "body",
                  "9",
                  "fontFamily"
                ]
                  },
                  fontWeight: {
                    $value: "Regular",
                    $type: "fontWeight",
                    value: "Regular",
                    type: "fontWeights",
                    filePath: "tokens/converted-tokens.json",
                    isSource: true,
                    original: {
                      $value: "Regular",
                      $type: "fontWeight",
                      value: "Regular",
                      type: "fontWeights"
                    },
                    name: "ds-semantic-font-body-9-font-weight",
                    attributes: {
                      category: "ds",
                      type: "semantic",
                      item: "font",
                      subitem: "body",
                      state: "9"
                    },
                    path: [
                  "ds",
                  "semantic",
                  "font",
                  "body",
                  "9",
                  "fontWeight"
                ]
                  },
                  lineHeight: {
                    $value: "140%",
                    $type: "lineHeight",
                    value: "140%",
                    type: "lineHeights",
                    filePath: "tokens/converted-tokens.json",
                    isSource: true,
                    original: {
                      $value: "140%",
                      $type: "lineHeight",
                      value: "140%",
                      type: "lineHeights"
                    },
                    name: "ds-semantic-font-body-9-line-height",
                    attributes: {
                      category: "ds",
                      type: "semantic",
                      item: "font",
                      subitem: "body",
                      state: "9"
                    },
                    path: [
                  "ds",
                  "semantic",
                  "font",
                  "body",
                  "9",
                  "lineHeight"
                ]
                  },
                  fontSize: {
                    $value: 14,
                    $type: "fontSize",
                    value: 14,
                    type: "fontSizes",
                    filePath: "tokens/converted-tokens.json",
                    isSource: true,
                    original: {
                      $value: 14,
                      $type: "fontSize",
                      value: 14,
                      type: "fontSizes"
                    },
                    name: "ds-semantic-font-body-9-font-size",
                    attributes: {
                      category: "ds",
                      type: "semantic",
                      item: "font",
                      subitem: "body",
                      state: "9"
                    },
                    path: [
                  "ds",
                  "semantic",
                  "font",
                  "body",
                  "9",
                  "fontSize"
                ]
                  },
                  letterSpacing: {
                    $value: "0px",
                    $type: "letterSpacing",
                    value: "0px",
                    type: "letterSpacing",
                    filePath: "tokens/converted-tokens.json",
                    isSource: true,
                    original: {
                      $value: "0px",
                      $type: "letterSpacing",
                      value: "0px",
                      type: "letterSpacing"
                    },
                    name: "ds-semantic-font-body-9-letter-spacing",
                    attributes: {
                      category: "ds",
                      type: "semantic",
                      item: "font",
                      subitem: "body",
                      state: "9"
                    },
                    path: [
                  "ds",
                  "semantic",
                  "font",
                  "body",
                  "9",
                  "letterSpacing"
                ]
                  }
                },
                fill: "#030303",
                verticalPadding: 8,
                horizontalPadding: 12
              }
            }
          }
        }
      }
    },
  },
 plugins: [require("@tailwindcss/forms"),require("@tailwindcss/typography")]
}