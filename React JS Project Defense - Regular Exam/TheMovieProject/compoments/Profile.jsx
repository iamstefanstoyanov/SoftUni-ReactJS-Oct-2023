import Card from './Card';

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='main-profile-info'>
        <section className='section-one'>
          <div className='profile-picture'>
            <img src='./public/profile.jpg' alt='No Picture' />
          </div>
          <div className='profile-info'>
            <p>Username</p>
            <p>Movies in watchlist</p>
            <p>Comments</p>
          </div>
        </section>
        <section className='section-two'>
          <div className='profile-watchlist'>
            <h3>My watchlist</h3>
            <div className='profile-watchlist-cards'>
              <Card />
            </div>
          </div>
          <div className='profile-comments'>
            <h3>My comments</h3>
            <div className='my-comments'>
              <h4>Movie Title</h4>
              <p>Comment</p>
              <div className='edit-delete-comments-btns'>
                <button className='edit-comment login'>Edit</button>
                <button className='delete-comment login'>Delete</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
