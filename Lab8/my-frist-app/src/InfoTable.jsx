export const InformationTable = () => {
    return(
        <table>
            <h2>Bảng thông tin</h2>
            <tr style={{backgroundColor: '#e6f7ff', color: 'rgb(8, 126, 164)'}}>
                <th>Tên</th>
                <th>Tuổi</th>
                <th>Quốc gia</th>
                <th>Gia đình</th>
                <th>Ngày sinh</th>
                <th>Giới tính</th>
                <th>Ghi chú</th>
            </tr>
            <tr>
                <td>Nguyễn Văn A</td>
                <td>25</td>
                <td>Việt Nam</td>
                <td>Không</td>
                <td>1998-05-10</td>
                <td>Nam</td>
                <td>Ghi chú 1</td>
            </tr>
             <tr>
                <td>Nguyễn Văn B</td>
                <td>32</td>
                <td>Mỹ</td>
                <td>Có</td>
                <td>1991-08-10</td>
                <td>Nữ</td>
                <td>Ghi chú 2</td>
            </tr>
            <tr>
                <td>Nguyễn Văn C</td>
                <td>40</td>
                <td>Pháp</td>
                <td>Không</td>
                <td>1983-12-05</td>
                <td>Nữ</td>
                <td>Ghi chú 2</td>
            </tr>
        </table>
    );
}