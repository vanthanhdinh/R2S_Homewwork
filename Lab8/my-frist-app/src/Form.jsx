import './styleForm.css';
const HTMLForm = () => {
    return(
        <div className='container'>
            <form>
                <br></br>
                <label for="name" className="label">Tên</label>
                <input name="username" id="name" type = "text" className="txt"></input> <br></br>

                <label for="country" className="label">Tuổi:</label>
                <input name="userage" id="age" type="text" class="txt"></input> <br></br>

                <label for="country" className="label">Quốc gia:</label>
                <select id="country" className="selectbox">
                    <option value="vn">Việt Nam</option>
                    <option value="usa">Mỹ</option>
                    <option value="eng">Anh</option>
                    <option value="fr">Pháp</option>
                </select> <br></br>

                <label for="Birthday" className="label">Ngày sinh:</label>
                <input type = "date" className="selectbox"></input><br></br>

                <label for="isMarried" className="label">Tình trạng hôn nhân:</label>
                <input type="checkbox" id="isMarried" name="isMarried"></input> <br></br>

                <label for="gender" className="label">Giới tính:</label> <br></br>
                <label for="fermale">Nam</label>
                <input type="radio" id="fermale" name="gender"></input>
                <label for="male">Nữ</label>
                <input type="radio" id="male" name="gender"></input>
                <label for="else">Khác</label>
                <input type="radio" id="else" name="gender"></input> <br></br>
            
                <label for="note" className="label">Ghi chú thêm:</label> <br></br>
                <textarea name="note" id="note" cols="20" rows="2" class="txt"></textarea> <br></br>

                <label for="imgload" className="label">Ảnh căn cước công dân </label> <br></br>
                <input type="file" name="imgload" id="imgload" ></input> <br></br>

                <input type="button" className="btn" id="submitbtn" value="Gửi"></input>
                <input type="button" className="btn" id="resetbtn" value="Đặt lại"></input>
            </form>
        </div>
    );
};

export default HTMLForm;