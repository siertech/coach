package tarefasprint;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import meta.Meta;
import sprint.Sprint;

import com.fasterxml.jackson.annotation.JsonView;
import com.siertech.stapi.crud.CrudClass;
import com.siertech.stapi.util.Views;

@Entity
@Table(name = "tarefasprint")
@Getter @Setter
public  class TarefaSprint extends CrudClass {

	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String titulo;
	
	//todo do done
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String status;
	
	@ManyToOne
	@JoinColumn(name="sprint_id")
    @JsonView(Views.Public.class)
	private Sprint sprint;
	

}
