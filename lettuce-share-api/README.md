# LettuceShare v1.2

This is a project i've been working on to further understand React & Redux. It connects to a Rails API and uses JWT for user-authentication. In terms of styling, i'm fiddling around with CSS Flex-box. 


### Other features to implement:

- WebSockets for notifcation & messaging streams.
- Location based post-filtering
- Ability to share posts on social media


# If you'd like to test it out or even contribute, follow these steps:

```bash
git clone git@github.com:MathewKostiuk/lettuce-share-react-on-rails.git custom_name_here_if_you_choose
cd custom_name_here_if_you_choose/lettuce-share-api
bundle install
cd lettuce-share-client && npm i
cd ..
```
- Create `config/database.yml` by copying `config/database.example.yml`
- Create `config/secrets.yml` you can create your own secret key base, or use  `rails secret` to generate one
- Create `.env` and set `AUTH_SECRET=your_generated_secret` & `SECRET_KEY_BASE=other_generated_secret`
- `gem install foreman`
- `foreman start -p 3000` will start both servers
 

