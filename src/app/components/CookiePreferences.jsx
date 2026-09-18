'use client';

export default function CookiePreferences() {
  const resetPreferences = () => {
    window.localStorage.removeItem('omni-analytics-consent');
    window.location.reload();
  };

  return (
    <button
      type="button"
      className="button buttonDark legalPreferenceButton"
      onClick={resetPreferences}
    >
      Review analytics preferences
    </button>
  );
}
