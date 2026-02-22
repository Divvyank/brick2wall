import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
    try {
        return new ImageResponse(
            (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#050507',
                        backgroundImage: 'radial-gradient(circle at center, #0F0F12 0%, #050507 100%)',
                    }}
                >
                    {/* Subtle Grid Background */}
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
                            backgroundSize: '4rem 4rem',
                        }}
                    />

                    {/* Golden Glow Flare */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '800px',
                            height: '800px',
                            background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)',
                        }}
                    />

                    {/* Pill Badge */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            padding: '8px 24px',
                            borderRadius: '9999px',
                            marginBottom: '32px',
                        }}
                    >
                        <div style={{ width: '8px', height: '8px', borderRadius: '4px', background: '#D4AF37', marginRight: '12px' }} />
                        <span style={{ fontSize: '14px', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                            Brick2Wall Infra
                        </span>
                    </div>

                    {/* Headline Container */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                        <h1
                            style={{
                                fontSize: '84px',
                                fontWeight: 600,
                                color: 'white',
                                lineHeight: 1,
                                margin: 0,
                                letterSpacing: '-0.04em',
                            }}
                        >
                            The supply chain,
                        </h1>
                        <h1
                            style={{
                                fontSize: '92px',
                                fontWeight: 600,
                                color: '#D4AF37',
                                lineHeight: 1,
                                margin: 0,
                                fontStyle: 'italic',
                                letterSpacing: '-0.04em',
                                backgroundClip: 'text',
                            }}
                        >
                            perfected.
                        </h1>
                    </div>

                    {/* Bottom text */}
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '40px',
                            display: 'flex',
                            fontSize: '20px',
                            color: 'rgba(255,255,255,0.5)',
                            letterSpacing: '-0.01em',
                        }}
                    >
                        Engineering Value. Eliminating Inefficiency.
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (e: any) {
        return new Response(`Failed to generate image`, {
            status: 500,
        });
    }
}
