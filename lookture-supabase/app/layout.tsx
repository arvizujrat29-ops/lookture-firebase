
export const metadata = { title: 'Lookture (Supabase)', description: 'Demo Next.js + Supabase' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{fontFamily:'ui-sans-serif, system-ui', background:'#0b0b10', color:'#eaeaf0', margin:0}}>
        <div style={{maxWidth:960, margin:'40px auto', padding:'0 16px'}}>
          {children}
        </div>
      </body>
    </html>
  )
}
