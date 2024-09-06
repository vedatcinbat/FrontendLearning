function SubmitFormApi() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        // Create form data object
        const formData = { name, email };

        // Simulate an API request
        fetch('https://example.com/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Form submitted successfully:', data);
            })
            .catch(error => {
                console.error('Error submitting form:', error);
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}
