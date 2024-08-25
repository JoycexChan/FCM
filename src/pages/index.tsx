import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        console.log('Home page loaded. Ready to receive notifications.');
    }, []);

    const handleSendNotification = async () => {
        try {
            const response = await fetch('/api/sendNotification', {
                method: 'POST',
            });
            const data = await response.json();
            console.log('Notification sent response:', data);
        } catch (error) {
            console.error('Error sending notification:', error);
        }
    };

    return (
        <div>
            <h1>Welcome to FCM Test Page</h1>
            <button onClick={handleSendNotification}>
                Send Test Notification
            </button>
        </div>
    );
}
