import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Devesh Dev Fauzdar Portfolio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'black',
                    color: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    fontFamily: 'sans-serif',
                }}
            >
                {/* Background elements to make it look cool */}
                <div style={{
                    position: 'absolute',
                    top: -100,
                    left: -100,
                    width: 500,
                    height: 500,
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '50%',
                    filter: 'blur(50px)',
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: -150,
                    right: -100,
                    width: 600,
                    height: 600,
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                }} />

                <div style={{ fontSize: 90, fontWeight: 'bold', letterSpacing: '-0.02em', marginBottom: 20 }}>
                    Devesh Dev Fauzdar
                </div>
                <div style={{ fontSize: 40, color: '#888888', letterSpacing: '0.05em' }}>
                    Interactive 3D Portfolio
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
