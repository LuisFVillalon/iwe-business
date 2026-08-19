// Decorative language-toggle flag icons, kept apart from Header.tsx so the
// nav/scroll/language logic there isn't buried under this SVG-in-JSX markup.

export function MexicoFlagIcon() {
  return (
    <div className="absolute inset-0 flex z-0 rounded-lg overflow-hidden" style={{
      boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1), inset 0 -2px 4px rgba(255,255,255,0.1)"
    }}>
      {/* Green stripe */}
      <div className="w-1/3 rounded-l relative" style={{
        background: "linear-gradient(135deg, #16a34a 0%, #15803d 50%, #166534 100%)",
        boxShadow: "inset 2px 0 4px rgba(0,0,0,0.1)"
      }}></div>

      {/* White stripe with eagle */}
      <div className="w-1/3 relative flex items-center justify-center" style={{
        background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)",
        boxShadow: "inset 0 0 4px rgba(0,0,0,0.05)"
      }}>
        <div className="w-2 h-2 rounded-full relative" style={{
          background: "linear-gradient(135deg, #92400e 0%, #78350f 50%, #451a03 100%)",
          boxShadow: "0 1px 2px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)"
        }}></div>
      </div>

      {/* Red stripe */}
      <div className="w-1/3 rounded-r relative" style={{
        background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)",
        boxShadow: "inset -2px 0 4px rgba(0,0,0,0.1)"
      }}></div>
    </div>
  );
}

export function USFlagIcon() {
  return (
    <div className="absolute inset-0 flex flex-col z-0 rounded-lg overflow-hidden" style={{
      boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1), inset 0 -2px 4px rgba(255,255,255,0.1)"
    }}>
      {/* Blue canton with stars area */}
      <div className="relative w-full h-full">
      {/* Red and white stripes */}
      <div className="absolute inset-0 flex flex-col">
        {/* Red stripe 1 */}
        <div className="h-1/7 w-full" style={{
          background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)"
        }}></div>
        {/* White stripe 1 */}
        <div className="h-1/7 w-full" style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)"
        }}></div>
        {/* Red stripe 2 */}
        <div className="h-1/7 w-full" style={{
          background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)"
        }}></div>
        {/* White stripe 2 */}
        <div className="h-1/7 w-full" style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)"
        }}></div>
        {/* Red stripe 3 */}
        <div className="h-1/7 w-full" style={{
          background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)"
        }}></div>
        {/* White stripe 3 */}
        <div className="h-1/7 w-full" style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)"
        }}></div>
        {/* Red stripe 4 (bottom) */}
        <div className="h-1/7 w-full rounded-b-lg" style={{
          background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)"
        }}></div>
      </div>

      {/* Blue canton (top-left) - moved after stripes for proper layering */}
      <div className="absolute top-0 left-0 w-1/2 h-3/5 rounded-tl-lg z-10" style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
        boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.2)"
      }}>
        {/* Stars representation */}
        <div className="absolute inset-0 grid grid-cols-3 gap-px p-1">
          <div className="w-0.5 h-0.5 bg-white rounded-full opacity-90 justify-self-center self-center"></div>
          <div className="w-0.5 h-0.5 bg-white rounded-full opacity-90 justify-self-center self-center"></div>
          <div className="w-0.5 h-0.5 bg-white rounded-full opacity-90 justify-self-center self-center"></div>
          <div className="w-0.5 h-0.5 bg-white rounded-full opacity-90 justify-self-center self-center"></div>
          <div className="w-0.5 h-0.5 bg-white rounded-full opacity-90 justify-self-center self-center"></div>
          <div className="w-0.5 h-0.5 bg-white rounded-full opacity-90 justify-self-center self-center"></div>
          <div className="w-0.5 h-0.5 bg-white rounded-full opacity-90 justify-self-center self-center"></div>
          <div className="w-0.5 h-0.5 bg-white rounded-full opacity-90 justify-self-center self-center"></div>
          <div className="w-0.5 h-0.5 bg-white rounded-full opacity-90 justify-self-center self-center"></div>
        </div>
      </div>
      </div>
    </div>
  );
}
