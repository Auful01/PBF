
const e = React.createElement;

// Display a "Like" <button>
function LikeButton() {

    const e = React.createElement;

    // Display a "Like" <button>
    return e(
        'button',
        { onClick: () => alert('berhasil') },
        'Like'
    );
}
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);