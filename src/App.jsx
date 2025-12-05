import React, { useState, useEffect } from 'react';

const manufacturers = [
  { id: 'nissan', name: 'Nissan', logo: '🚗' },
  { id: 'toyota', name: 'Toyota', logo: '🚙' },
  { id: 'honda', name: 'Honda', logo: '🏎️' },
  { id: 'bmw', name: 'BMW', logo: '🚘' },
  { id: 'mercedes', name: 'Mercedes-Benz', logo: '✨' },
  { id: 'audi', name: 'Audi', logo: '💫' },
  { id: 'porsche', name: 'Porsche', logo: '🏁' },
  { id: 'lamborghini', name: 'Lamborghini', logo: '🐂' },
  { id: 'ferrari', name: 'Ferrari', logo: '🐎' },
  { id: 'mclaren', name: 'McLaren', logo: '🔶' },
];

const categories = [
  { id: 'exterior', name: 'Exterior', icon: '◇' },
  { id: 'interior', name: 'Interior', icon: '◈' },
];

const featuredProducts = [
  { id: 1, name: 'Carbon Fiber Hood', category: 'Exterior', price: 2499, manufacturer: 'BMW', image: '🛡️', rating: 4.9 },
  { id: 2, name: 'CF Steering Wheel', category: 'Interior', price: 899, manufacturer: 'Ferrari', image: '🎯', rating: 5.0 },
  { id: 3, name: 'Side Mirror Caps', category: 'Exterior', price: 349, manufacturer: 'Porsche', image: '🔲', rating: 4.8 },
  { id: 4, name: 'Dashboard Trim Kit', category: 'Interior', price: 1299, manufacturer: 'Lamborghini', image: '📐', rating: 4.9 },
  { id: 5, name: 'Front Splitter', category: 'Exterior', price: 1899, manufacturer: 'McLaren', image: '⚡', rating: 4.7 },
  { id: 6, name: 'Shift Knob', category: 'Interior', price: 249, manufacturer: 'Nissan', image: '🔘', rating: 4.6 },
];

export default function App() {
  const [selectedMfr, setSelectedMfr] = useState(null);
  const [selectedCat, setSelectedCat] = useState(null);
  const [mfrDropdownOpen, setMfrDropdownOpen] = useState(false);
  const [catDropdownOpen, setCatDropdownOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const filteredProducts = featuredProducts.filter(p => {
    if (selectedMfr && p.manufacturer.toLowerCase() !== selectedMfr) return false;
    if (selectedCat && p.category.toLowerCase() !== selectedCat) return false;
    return true;
  });

  return (
    <div style={{
      minHeight: '100vh',
      background: `
        radial-gradient(ellipse at 20% 0%, rgba(180, 140, 80, 0.08) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 100%, rgba(180, 140, 80, 0.05) 0%, transparent 50%),
        linear-gradient(180deg, #0a0a0a 0%, #111111 50%, #0d0d0d 100%)
      `,
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      color: '#e8e4dc',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.01) 2px,
            rgba(255,255,255,0.01) 4px
          ),
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.01) 2px,
            rgba(255,255,255,0.01) 4px
          )
        `,
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '20px 60px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'linear-gradient(180deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0) 100%)',
        zIndex: 100,
        transform: loaded ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, #b8956e 0%, #8b7355 100%)',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ fontSize: '16px', color: '#0a0a0a', fontWeight: 'bold' }}>CF</span>
          </div>
          <span style={{
            fontSize: '24px',
            fontWeight: '300',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            background: 'linear-gradient(135deg, #e8e4dc 0%, #b8956e 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>CARBONFORGE</span>
        </div>

        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          {['Collection', 'Manufacturers', 'About', 'Contact'].map(item => (
            <a key={item} href="#" style={{
              color: '#a0998c',
              textDecoration: 'none',
              fontSize: '13px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontFamily: "'Helvetica Neue', sans-serif",
              transition: 'color 0.3s',
            }}
            onMouseEnter={e => e.target.style.color = '#b8956e'}
            onMouseLeave={e => e.target.style.color = '#a0998c'}
            >{item}</a>
          ))}
          <div style={{
            width: '1px',
            height: '24px',
            background: 'rgba(184, 149, 110, 0.3)',
          }} />
          <div style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
          }}>
            <span style={{ cursor: 'pointer', fontSize: '18px' }}>🔍</span>
            <span style={{ cursor: 'pointer', fontSize: '18px', position: 'relative' }}>
              🛒
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                width: '16px',
                height: '16px',
                background: '#b8956e',
                borderRadius: '50%',
                fontSize: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0a0a0a',
                fontWeight: 'bold',
              }}>3</span>
            </span>
          </div>
        </div>
      </nav>

      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '120px 60px 80px',
        position: 'relative',
        zIndex: 2,
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(184, 149, 110, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <p style={{
          fontSize: '12px',
          letterSpacing: '6px',
          textTransform: 'uppercase',
          color: '#b8956e',
          marginBottom: '30px',
          fontFamily: "'Helvetica Neue', sans-serif",
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
        }}>Premium Carbon Fiber Parts</p>

        <h1 style={{
          fontSize: 'clamp(48px, 10vw, 120px)',
          fontWeight: '300',
          textAlign: 'center',
          lineHeight: '1.1',
          margin: '0 0 40px 0',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
        }}>
          <span style={{ display: 'block', color: '#e8e4dc' }}>Engineered</span>
          <span style={{
            display: 'block',
            background: 'linear-gradient(135deg, #b8956e 0%, #d4b896 50%, #8b7355 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontStyle: 'italic',
          }}>Perfection</span>
        </h1>

        <p style={{
          fontSize: '18px',
          color: '#7a756b',
          maxWidth: '600px',
          textAlign: 'center',
          lineHeight: '1.8',
          marginBottom: '60px',
          fontFamily: "'Helvetica Neue', sans-serif",
          fontWeight: '300',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s',
        }}>
          From Nissan to Ferrari — your one-stop destination for authentic carbon fiber components. Dropshipped directly from certified manufacturers worldwide.
        </p>

        <div style={{
          display: 'flex',
          gap: '30px',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s',
        }}>
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => {
                setMfrDropdownOpen(!mfrDropdownOpen);
                setCatDropdownOpen(false);
              }}
              style={{
                background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                border: '1px solid rgba(184, 149, 110, 0.3)',
                padding: '18px 50px 18px 30px',
                color: selectedMfr ? '#e8e4dc' : '#7a756b',
                fontSize: '14px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                minWidth: '280px',
                textAlign: 'left',
                fontFamily: "'Helvetica Neue', sans-serif",
                position: 'relative',
                transition: 'all 0.3s',
                boxShadow: mfrDropdownOpen ? '0 10px 40px rgba(184, 149, 110, 0.15)' : 'none',
              }}
            >
              {selectedMfr ? manufacturers.find(m => m.id === selectedMfr)?.name : 'Select Manufacturer'}
              <span style={{
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: `translateY(-50%) rotate(${mfrDropdownOpen ? '180deg' : '0deg'})`,
                transition: 'transform 0.3s',
                color: '#b8956e',
              }}>▾</span>
            </button>
            
            {mfrDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                background: 'linear-gradient(180deg, rgba(25,25,25,0.98) 0%, rgba(15,15,15,0.98) 100%)',
                border: '1px solid rgba(184, 149, 110, 0.2)',
                borderTop: 'none',
                maxHeight: '300px',
                overflowY: 'auto',
                zIndex: 50,
                backdropFilter: 'blur(10px)',
              }}>
                <div
                  onClick={() => { setSelectedMfr(null); setMfrDropdownOpen(false); }}
                  style={{
                    padding: '14px 30px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    letterSpacing: '1px',
                    color: '#7a756b',
                    borderBottom: '1px solid rgba(184, 149, 110, 0.1)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.target.style.background = 'rgba(184, 149, 110, 0.1)'; e.target.style.color = '#e8e4dc'; }}
                  onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#7a756b'; }}
                >
                  All Manufacturers
                </div>
                {manufacturers.map(mfr => (
                  <div
                    key={mfr.id}
                    onClick={() => { setSelectedMfr(mfr.id); setMfrDropdownOpen(false); }}
                    style={{
                      padding: '14px 30px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      letterSpacing: '1px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      color: selectedMfr === mfr.id ? '#b8956e' : '#a0998c',
                      borderBottom: '1px solid rgba(184, 149, 110, 0.1)',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { e.target.style.background = 'rgba(184, 149, 110, 0.1)'; e.target.style.color = '#e8e4dc'; }}
                    onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = selectedMfr === mfr.id ? '#b8956e' : '#a0998c'; }}
                  >
                    <span>{mfr.logo}</span>
                    <span style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>{mfr.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={{ position: 'relative' }}>
            <button
              onClick={() => {
                setCatDropdownOpen(!catDropdownOpen);
                setMfrDropdownOpen(false);
              }}
              style={{
                background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                border: '1px solid rgba(184, 149, 110, 0.3)',
                padding: '18px 50px 18px 30px',
                color: selectedCat ? '#e8e4dc' : '#7a756b',
                fontSize: '14px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                minWidth: '220px',
                textAlign: 'left',
                fontFamily: "'Helvetica Neue', sans-serif",
                position: 'relative',
                transition: 'all 0.3s',
                boxShadow: catDropdownOpen ? '0 10px 40px rgba(184, 149, 110, 0.15)' : 'none',
              }}
            >
              {selectedCat ? categories.find(c => c.id === selectedCat)?.name : 'Category'}
              <span style={{
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: `translateY(-50%) rotate(${catDropdownOpen ? '180deg' : '0deg'})`,
                transition: 'transform 0.3s',
                color: '#b8956e',
              }}>▾</span>
            </button>
            
            {catDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                background: 'linear-gradient(180deg, rgba(25,25,25,0.98) 0%, rgba(15,15,15,0.98) 100%)',
                border: '1px solid rgba(184, 149, 110, 0.2)',
                borderTop: 'none',
                zIndex: 50,
                backdropFilter: 'blur(10px)',
              }}>
                <div
                  onClick={() => { setSelectedCat(null); setCatDropdownOpen(false); }}
                  style={{
                    padding: '14px 30px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    letterSpacing: '1px',
                    color: '#7a756b',
                    borderBottom: '1px solid rgba(184, 149, 110, 0.1)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.target.style.background = 'rgba(184, 149, 110, 0.1)'; e.target.style.color = '#e8e4dc'; }}
                  onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#7a756b'; }}
                >
                  All Categories
                </div>
                {categories.map(cat => (
                  <div
                    key={cat.id}
                    onClick={() => { setSelectedCat(cat.id); setCatDropdownOpen(false); }}
                    style={{
                      padding: '14px 30px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      letterSpacing: '1px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      color: selectedCat === cat.id ? '#b8956e' : '#a0998c',
                      borderBottom: '1px solid rgba(184, 149, 110, 0.1)',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { e.target.style.background = 'rgba(184, 149, 110, 0.1)'; e.target.style.color = '#e8e4dc'; }}
                    onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = selectedCat === cat.id ? '#b8956e' : '#a0998c'; }}
                  >
                    <span style={{ color: '#b8956e' }}>{cat.icon}</span>
                    <span style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>{cat.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button style={{
            background: 'linear-gradient(135deg, #b8956e 0%, #8b7355 100%)',
            border: 'none',
            padding: '18px 40px',
            color: '#0a0a0a',
            fontSize: '14px',
            fontWeight: '600',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            fontFamily: "'Helvetica Neue', sans-serif",
            transition: 'all 0.3s',
            boxShadow: '0 4px 20px rgba(184, 149, 110, 0.3)',
          }}
          onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'}
          onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
          >
            Shop Now
          </button>
        </div>

        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          opacity: 0.5,
        }}>
          <span style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(180deg, #b8956e 0%, transparent 100%)',
            animation: 'pulse 2s infinite',
          }} />
        </div>
      </section>

      <section style={{
        padding: '100px 60px',
        position: 'relative',
        zIndex: 2,
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '60px',
        }}>
          <div>
            <p style={{
              fontSize: '12px',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: '#b8956e',
              marginBottom: '15px',
              fontFamily: "'Helvetica Neue', sans-serif",
            }}>Featured Collection</p>
            <h2 style={{
              fontSize: '48px',
              fontWeight: '300',
              margin: 0,
            }}>
              {selectedMfr || selectedCat ? 'Filtered Results' : 'Best Sellers'}
            </h2>
          </div>
          <a href="#" style={{
            color: '#b8956e',
            textDecoration: 'none',
            fontSize: '13px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontFamily: "'Helvetica Neue', sans-serif",
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
            View All <span style={{ fontSize: '18px' }}>→</span>
          </a>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '30px',
        }}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              style={{
                background: 'linear-gradient(145deg, rgba(25,25,25,0.8) 0%, rgba(15,15,15,0.9) 100%)',
                border: '1px solid rgba(184, 149, 110, 0.15)',
                padding: '30px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transform: hoveredProduct === product.id ? 'translateY(-5px)' : 'translateY(0)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: hoveredProduct === product.id 
                  ? '0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(184, 149, 110, 0.3)' 
                  : '0 4px 20px rgba(0,0,0,0.2)',
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(184, 149, 110, 0.05) 0%, transparent 50%)',
                opacity: hoveredProduct === product.id ? 1 : 0,
                transition: 'opacity 0.4s',
                pointerEvents: 'none',
              }} />

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '30px',
              }}>
                <span style={{
                  fontSize: '10px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#7a756b',
                  fontFamily: "'Helvetica Neue', sans-serif",
                  padding: '6px 12px',
                  border: '1px solid rgba(184, 149, 110, 0.2)',
                }}>{product.category}</span>
                <span style={{
                  fontSize: '10px',
                  letterSpacing: '2px',
                  color: '#b8956e',
                  fontFamily: "'Helvetica Neue', sans-serif",
                }}>{product.manufacturer}</span>
              </div>

              <div style={{
                height: '150px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '64px',
                marginBottom: '30px',
                filter: 'grayscale(30%)',
                transform: hoveredProduct === product.id ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.4s',
              }}>
                {product.image}
              </div>

              <h3 style={{
                fontSize: '22px',
                fontWeight: '400',
                margin: '0 0 10px 0',
                letterSpacing: '1px',
              }}>{product.name}</h3>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{
                  fontSize: '24px',
                  fontWeight: '300',
                  color: '#b8956e',
                }}>${product.price.toLocaleString()}</span>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#7a756b',
                  fontSize: '13px',
                }}>
                  <span style={{ color: '#b8956e' }}>★</span>
                  {product.rating}
                </div>
              </div>

              <button style={{
                width: '100%',
                marginTop: '20px',
                padding: '14px',
                background: hoveredProduct === product.id 
                  ? 'linear-gradient(135deg, #b8956e 0%, #8b7355 100%)' 
                  : 'transparent',
                border: '1px solid rgba(184, 149, 110, 0.4)',
                color: hoveredProduct === product.id ? '#0a0a0a' : '#b8956e',
                fontSize: '12px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: "'Helvetica Neue', sans-serif",
                transition: 'all 0.3s',
              }}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '80px',
            color: '#7a756b',
          }}>
            <p style={{ fontSize: '24px', marginBottom: '15px' }}>No products found</p>
            <p style={{ fontSize: '14px' }}>Try adjusting your filters</p>
          </div>
        )}
      </section>

      <section style={{
        padding: '100px 60px',
        background: 'linear-gradient(180deg, transparent 0%, rgba(184, 149, 110, 0.03) 50%, transparent 100%)',
        position: 'relative',
        zIndex: 2,
      }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p style={{
            fontSize: '12px',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: '#b8956e',
            marginBottom: '15px',
            fontFamily: "'Helvetica Neue', sans-serif",
          }}>Trusted By</p>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '300',
            margin: 0,
          }}>World-Class Brands</h2>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '40px',
        }}>
          {manufacturers.map(mfr => (
            <div
              key={mfr.id}
              onClick={() => { setSelectedMfr(mfr.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              style={{
                padding: '20px 30px',
                border: '1px solid rgba(184, 149, 110, 0.15)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                transition: 'all 0.3s',
                background: selectedMfr === mfr.id ? 'rgba(184, 149, 110, 0.1)' : 'transparent',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(184, 149, 110, 0.4)';
                e.currentTarget.style.background = 'rgba(184, 149, 110, 0.05)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(184, 149, 110, 0.15)';
                e.currentTarget.style.background = selectedMfr === mfr.id ? 'rgba(184, 149, 110, 0.1)' : 'transparent';
              }}
            >
              <span style={{ fontSize: '24px' }}>{mfr.logo}</span>
              <span style={{
                fontSize: '14px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontFamily: "'Helvetica Neue', sans-serif",
                color: '#a0998c',
              }}>{mfr.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{
        padding: '100px 60px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '60px',
        position: 'relative',
        zIndex: 2,
      }}>
        {[
          { icon: '✈️', title: 'Global Dropshipping', desc: 'Direct from certified manufacturers to your door. No inventory hassles.' },
          { icon: '🛡️', title: 'Authentic Parts Only', desc: 'Every component verified for quality and authenticity. 100% genuine.' },
          { icon: '💎', title: 'Premium Quality', desc: 'OEM-grade carbon fiber. Built to exceed original specifications.' },
        ].map((feature, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{
              width: '80px',
              height: '80px',
              margin: '0 auto 30px',
              border: '1px solid rgba(184, 149, 110, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              background: 'linear-gradient(135deg, rgba(184, 149, 110, 0.05) 0%, transparent 100%)',
            }}>
              {feature.icon}
            </div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '400',
              marginBottom: '15px',
              letterSpacing: '1px',
            }}>{feature.title}</h3>
            <p style={{
              color: '#7a756b',
              fontSize: '14px',
              lineHeight: '1.8',
              fontFamily: "'Helvetica Neue', sans-serif",
            }}>{feature.desc}</p>
          </div>
        ))}
      </section>

      <footer style={{
        padding: '80px 60px 40px',
        borderTop: '1px solid rgba(184, 149, 110, 0.1)',
        position: 'relative',
        zIndex: 2,
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '60px',
          marginBottom: '60px',
        }}>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px',
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                background: 'linear-gradient(135deg, #b8956e 0%, #8b7355 100%)',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ fontSize: '14px', color: '#0a0a0a', fontWeight: 'bold' }}>CF</span>
              </div>
              <span style={{
                fontSize: '20px',
                fontWeight: '300',
                letterSpacing: '3px',
                textTransform: 'uppercase',
              }}>CARBONFORGE</span>
            </div>
            <p style={{
              color: '#7a756b',
              fontSize: '14px',
              lineHeight: '1.8',
              maxWidth: '300px',
              fontFamily: "'Helvetica Neue', sans-serif",
            }}>
              Your premier destination for authentic carbon fiber automotive parts. From economy to exotic — we've got you covered.
            </p>
          </div>

          {[
            { title: 'Shop', links: ['Exterior Parts', 'Interior Parts', 'New Arrivals', 'Best Sellers'] },
            { title: 'Support', links: ['Contact Us', 'Shipping Info', 'Returns', 'FAQ'] },
            { title: 'Company', links: ['About Us', 'Careers', 'Press', 'Partners'] },
          ].map((col, i) => (
            <div key={i}>
              <h4 style={{
                fontSize: '12px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                marginBottom: '25px',
                color: '#b8956e',
                fontFamily: "'Helvetica Neue', sans-serif",
              }}>{col.title}</h4>
              {col.links.map((link, j) => (
                <a key={j} href="#" style={{
                  display: 'block',
                  color: '#7a756b',
                  textDecoration: 'none',
                  fontSize: '14px',
                  marginBottom: '12px',
                  fontFamily: "'Helvetica Neue', sans-serif",
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = '#e8e4dc'}
                onMouseLeave={e => e.target.style.color = '#7a756b'}
                >{link}</a>
              ))}
            </div>
          ))}
        </div>

        <div style={{
          borderTop: '1px solid rgba(184, 149, 110, 0.1)',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <p style={{
            color: '#5a554b',
            fontSize: '12px',
            fontFamily: "'Helvetica Neue', sans-serif",
          }}>© 2024 CarbonForge. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Privacy', 'Terms', 'Cookies'].map(link => (
              <a key={link} href="#" style={{
                color: '#5a554b',
                textDecoration: 'none',
                fontSize: '12px',
                fontFamily: "'Helvetica Neue', sans-serif",
              }}>{link}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
